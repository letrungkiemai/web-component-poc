'use strict'

var start = new Date().toISOString()  // beware of dynamic date - can "skew" the loaders filtering, fucking up paging on nextpage call after midnight

var eventTilesFilter = (map) => { return map.Events.filter( ts => ts.end > start ).map( ts => ts.tiles ) }
var sortLabeler = (event, currenLabel) => event.next.start 
const eventLocationMapper = (event) => [event.location.gps.latitude,event.location.gps.longitude]
var eventFilter = (event) => true

const buildDateCard = (heading, byline) => {
  const div = document.createElement("div")
  const h2 = document.createElement("h2")

  div.appendChild(h2)
  div.classList.add("dateCard")
  
  h2.appendChild(document.createTextNode(heading))
  if (byline) div.appendChild(document.createTextNode(byline))

  tiler.addTile(div,null,true,true)
}

var lastHead = null;
const getDateHandling = (e, dailyfrequency) => {
  const date = new Date(Date.parse(e.next.start))
  const dateEnd = e.next.end ? new Date(Date.parse(e.next.end)) : null
  const weekday = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear()
  var showYearAfter = new Date();
  showYearAfter.setMonth(showYearAfter.getMonth() + 5);
  
  const handler = {}

  
  const dayDiff = !this.lastEvent ? 999 : (Date.parse(e.next.start) - Date.parse(this.lastEvent.next.start)) / (1000*60*60*24)
 
  const isDiff = (compareLength) => !this.lastEvent || this.lastEvent.next.start.substr(0,compareLength) != e.next.start.substr(0,compareLength)
  const baseCardBuilder = (heading, byline) => {
    buildDateCard(heading,byline)
    this.lastEvent = e
  }

  if (dailyfrequency < 5 && (!this.lastHandler || this.lastHandler.name=="monthly" || isDiff(7) && dayDiff > 2)) {
    handler.name = "monthly"
    handler.gotCard = isDiff(7)
    handler.cardBuilder = () => baseCardBuilder(month, date>showYearAfter ? year : null)
    handler.detailBuilder = () => {
      const timeDiv = document.createElement("div")
      const dateSpan = document.createElement("span")
      timeDiv.appendChild(dateSpan)
      timeDiv.classList.add("time")
      
      dateSpan.appendChild(document.createTextNode((date.getDate()<10?"0":"") + date.getDate() ))
      dateSpan.classList.add("day")
      timeDiv.appendChild(document.createTextNode(` ${month.toLowerCase()} · `))
      
      timeDiv.appendChild(document.createTextNode(`${e.next.start.substr(11,5)} ${e.next.end ? " - "+e.next.end.substr(11,5):""}`))
      
      return timeDiv
    }
  } else {
    handler.gotCard = isDiff(10)
    handler.cardBuilder = () => baseCardBuilder(weekday,`${month} ${date.getDate()}`)
    handler.detailBuilder = () => {
      const timeDiv = document.createElement("div")
      const dateSpan = document.createElement("span")
      timeDiv.appendChild(dateSpan)
      timeDiv.classList.add("time")
      
      timeDiv.appendChild(document.createTextNode(`${e.next.start.substr(11,5)} ${e.next.end ? " - "+e.next.end.substr(11,5):""}`))
      
      return timeDiv
    } 
  }

  this.lastHandler = handler
  return handler
}

const addToList = (result) => {
  if (result.data.length==0) return

  const daysSpan = Math.max(1,(Date.parse(result.data[result.data.length-1].next.start) - Date.parse(result.data[0].next.start)) / (1000*60*60*24))
  const dailyFrequency = result.data.length / daysSpan
  result.data.forEach( e => {
    const dateHandling = getDateHandling(e, dailyFrequency)
    
    if (dateHandling.gotCard) {
      dateHandling.cardBuilder()
    }

    const div = document.createElement("div")
    const img = document.createElement("img")
    const detailsDiv = document.createElement("div")
    const h3 = document.createElement("h3")

    div.appendChild(img)
    div.appendChild(detailsDiv)
    div.classList.add("card")

    detailsDiv.appendChild(dateHandling.detailBuilder())
    detailsDiv.appendChild(h3)
    detailsDiv.classList.add("details")

    img.src = "https://betacdn.azureedge.net/images/" + e.images.large + ".jpg"

    h3.appendChild(document.createTextNode(`${e.name}`))

    detailsDiv.appendChild(document.createTextNode(`${e.location.name} ${e.tags[0] ? " · "+e.tags[0].text : ""} `))

    const forceSingle = e.times.length > 3 && e.times[0].time_id != e.next.time_id
    tiler.addTile(div,e.id,forceSingle,false)
  })
}



window.onload = () => {
  document.search()
}


var tiler, searchContinuationToken

const blockLoad = (loader, pageSize, blockSize, continuationToken) => {
  loader.next( pageSize, blockSize, continuationToken ).then( (result)=> {
    addToList(result)
    if (result.data.length < pageSize && result.continuationToken.more) blockLoad(loader, pageSize-result.data.length, blockSize, result.continuationToken)
    searchContinuationToken = result.continuationToken
    document.getElementById("content").classList.remove("empty")
    if (!result.continuationToken.more) document.getElementById("content").classList.add("empty")
  })
}

var eventLoader = new ObjectLoader()

document.loadmore = (count) => {
  blockLoad(eventLoader, count, 30,searchContinuationToken)
}

document.search = (keyword) => {
  // dateHandling goo:
  this.lastEvent=null

  tiler = new Tiler(5)
  document.tiler = tiler

  document.getElementById("tiles").innerHTML = ""
  document.getElementById("tiles").appendChild(tiler.asElement())
  tiler.observeResize()

  if (keyword) {
    var filterstrings = [keyword.toLowerCase()]
    var regex = new RegExp( filterstrings.join( "|" ), "i")
    eventFilter = (event) => regex.test(JSON.stringify(event))
  } else{
    eventFilter = (event) => true
  }

  var eventFilter2 = (event) => Date.parse(event.next.start) > Date.now() && eventFilter(event)

  eventLoader.init( [55.6759,12.5655], 25, eventTilesFilter, eventFilter2, eventLocationMapper, sortLabeler, false ). then( () => {
    blockLoad(eventLoader, 50, 7)
 })
}