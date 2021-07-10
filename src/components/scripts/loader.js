"use strict"

class LoaderMap {
  constructor() {
    this.map = null
    this.containerUrl = "https://betacdn.azureedge.net/geo/"
    this.mapUrl = this.containerUrl + "map_55.55,12.374_2021-07-08T10.json"
  } 

  getMap() {
    if (!this.map) {
      setInterval( () => fetch(this.mapUrl, {method: 'HEAD'}).then( () => this.loadMap()), 900000 ) // 15 minutes
      this.loadMap()
    }
    return this.map
  }

  loadMap() {
    this.map = fetch( this.mapUrl ).then(response => response.json())
  }
}


class ObjectLoader {

  async init( location, radiusKm, tilesFilter, userFilter, eventLocationMapper, docSortLabeler, skipIdDuplicates  ) {
    this.location = location
    this.eventLocationMapper = eventLocationMapper
    this.skipIdDuplicates = skipIdDuplicates || false
    this.idDuplicates = []
    const geoFilter = (doc) => this.distance(  this.location, this.eventLocationMapper(doc) ) < radiusKm*1000
    this.docFilter = (doc) => geoFilter(doc) && userFilter(doc) && this.idDuplicates.indexOf(doc.id)==-1
    this.docSortLabeler = docSortLabeler
    const radiusLatitudeDegree = radiusKm / 111
    const radiusLongitudeDegree = radiusLatitudeDegree * (1/Math.cos(location[0]*Math.PI/180))
    const userTile = [location[0]+radiusLatitudeDegree, location[1]-radiusLongitudeDegree, location[0]-radiusLatitudeDegree, location[1]+radiusLongitudeDegree]
    const squaresOverlapFilter = (tile) => !(tile[0] < userTile[2] || tile[2] > userTile[0] || tile[1] > userTile[3] || tile[3] < userTile[1])
    this.mapLoader = new LoaderMap()
    this.mapTiles = tilesFilter(await this.mapLoader.getMap()).map(block => block.filter( t => squaresOverlapFilter(t.tile.split(",")) ) )
  }

  async next( pageSize, maxBlocks, token, nextObjects ) {
    maxBlocks = maxBlocks || 9999
    token = token  || { block: 0, indexes: null, nextLabel: null, more: true } 
    nextObjects = nextObjects || []
    const blockTiles = this.mapTiles[token.block]

    return Promise.all(blockTiles.map(tile=>fetch(this.mapLoader.containerUrl+tile.file, {cache: "default"}))).then(responses =>
      Promise.all(responses.map(res => res.json()))).then(tilesDocs => {
        token.indexes = token.indexes || tilesDocs.map( docs => docs.findIndex(this.docFilter))

        const tileMatches = token.indexes.map( (nextMatch, tileIndex) => nextMatch==-1 ? null : tilesDocs[tileIndex][nextMatch])
        const tileMatchLabels = tileMatches.map( doc => doc ? this.docSortLabeler(doc,token.nextLabel) : null )
        while (nextObjects.length < pageSize && token.indexes.some( i => i>-1) ) {
          token.nextLabel = [...tileMatchLabels].sort()[0]
          const matchedTileIdx = tileMatchLabels.indexOf(token.nextLabel)
          nextObjects.push(tileMatches[matchedTileIdx])
          if (this.skipIdDuplicates) this.idDuplicates.push(tileMatches[matchedTileIdx].id)

          var nextDocMatchIndex = tilesDocs[matchedTileIdx].findIndex( (doc,index) => index>token.indexes[matchedTileIdx] && this.docFilter(doc)) 
          token.indexes[matchedTileIdx] = nextDocMatchIndex
          tileMatches[matchedTileIdx] = nextDocMatchIndex>-1 ? tilesDocs[matchedTileIdx][nextDocMatchIndex] : null
          tileMatchLabels[matchedTileIdx] = nextDocMatchIndex>-1 ? this.docSortLabeler(tileMatches[matchedTileIdx], token.nextLabel) : null
        }
        if (token.indexes.every(idx => idx==-1)) {
          token.block++
          token.indexes = null
          token.more = token.block < this.mapTiles.length
          maxBlocks--
        }

        if (maxBlocks == 0 || nextObjects.length >= pageSize || token.block >= this.mapTiles.length) {
          return {
            continuationToken: token,
            data: nextObjects
          }
        } else {
          return this.next( pageSize, maxBlocks, token, nextObjects )
        }
    })
  }

  distance(p1,p2) {
    const R = 6371e3
    const φ1 = p1[0] * Math.PI/180
    const φ2 = p2[0]* Math.PI/180
    const Δφ = (p2[0]-p1[0]) * Math.PI/180
    const Δλ = (p2[1]-p1[1]) * Math.PI/180
    
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    
    return R * c
  }    
}