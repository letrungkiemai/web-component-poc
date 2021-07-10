"use strict"

class Tiler {
  constructor( columnCount ) {
    this.columnCount = columnCount
    this.gapToleranceIncrement = 25 
    this.columnSpanClassnames = ["single", "double","triple","quadruple", "quintuple", "sextuple"]
    this.maxTileSpan = columnCount > 2 ? columnCount-1 : columnCount
    this.received = 0
    this.tiles = []
    this.resetDrawState()
    this.element = document.createElement("div")
    this.element.classList.add("tiler")
    this.element.classList.add(`tiled-${this.columnSpanClassnames[this.columnCount-1]}`)
  }

  asElement() {
    return this.element
  }

  redraw(retile) {
    this.resetDrawState()
    this.draw(retile)
    if (this.focused) window.scrollBy(0, this.focused.getBoundingClientRect().top - this.focusedOffset)
  }

  setColumnCount(columnCount) {
    if (columnCount!=this.columnCount) {
      this.element.classList.remove(`tiled-${this.columnSpanClassnames[this.columnCount-1]}`)
      this.columnCount = columnCount
      this.element.classList.add(`tiled-${this.columnSpanClassnames[this.columnCount-1]}`)
      this.redraw(true)
      if (this.focused) window.scrollBy(0, this.focused.getBoundingClientRect().top - this.focusedOffset)
    }
  }

  draw(retileAll) {
    if (this.mutex) return
    this.mutex = true

    const next = () => this.tiles.find( e => !e.loading && e.tileIndex == this.placed )
    var nextTile = next()
    var retile = retileAll

    while (nextTile) {
      if (!nextTile.document) {
        nextTile.style.position = "absolute"
        nextTile.style.bottom = "-1px"
        this.element.appendChild(nextTile)
      }

      if (nextTile.classList.contains("break")) {
        const largestProgress = Math.max(...this.progress)
        this.progress.forEach( (p, idx) => {this.progress[idx] = largestProgress })
        retile = retileAll
      }

      const smallestProgress = Math.min(...this.progress)
      const vacant = this.progress.indexOf(smallestProgress)
      const spanPreset = this.columnSpanClassnames.some((cn) => nextTile.classList.contains(cn))

      var moves = []
      const spanOf = (m) => m[1]-m[0]+1

      if (!nextTile.classList.contains("force-single")) {
        const img = nextTile.querySelector("img")
        const imgScale = img ? img.naturalHeight / img.height : 0
        const imgWidthRatio = img ? img.width / img.height : 0
  
        for (var s=this.maxTileSpan-1;s>=0;s--) {
          for (var i=-s;i<=0;i++) {
            moves.push([i,i+s])
          }
        } 
  
        moves = moves.filter( m => m[0]+vacant>=0 && m[1]+vacant<this.columnCount)
                      .filter( m => { 
                        const inMove = this.progress.filter( (p,idx) => m[0]+vacant<=idx && m[1]+vacant>=idx )
                        const outOfMove = this.progress.filter( (p,idx) => m[0]+vacant>idx || m[1]+vacant<idx )
                        return  Math.max(...inMove) <= Math.min(...outOfMove) && Math.max(...inMove) - Math.min(...inMove) <= (spanOf(m))*this.gapToleranceIncrement
                      }).filter( m => imgWidthRatio>2.5 || spanOf(m)<=3 && this.columnCount>3 && imgWidthRatio>1.8 || spanOf(m)<=2 && this.columnCount>2 && imgWidthRatio>0.7 )
                      .filter( m => imgScale>3 || imgScale>1.9 && spanOf(m)<4 || imgScale>1.6 && spanOf(m)<3 )
                      .filter( m => retile || !spanPreset || nextTile.classList.contains(this.columnSpanClassnames[spanOf(m)-1]) ) //|| this.columnSpanClassnames.some(cn, idx => nextTile.classList.contains(cn) && spanOf(m) == idx+1) )
      }

      if (moves.length==0) moves.push([0,0])

      const move = moves[ Math.floor(Math.random() * moves.length)]
      const top = Math.max(...(this.progress.filter( (p,idx) => move[0]+vacant<=idx && move[1]+vacant>=idx )))
      const spanClass = this.columnSpanClassnames[spanOf(move)-1]

      if (!spanPreset || retile || !nextTile.classList.contains(spanClass)) {
        this.columnSpanClassnames.forEach( cn => nextTile.classList.remove(cn))
        nextTile.classList.add(spanClass)
      }
      const nextLeft = (100/this.columnCount*(vacant+move[0])) + "%"
      if (nextTile.style.left != nextLeft) retile = true
      nextTile.style.left = nextLeft
      nextTile.style.top = top + "px"
      nextTile.style.bottom = ""

      for (var i=vacant+move[0]; i <=vacant+move[1]; i++) {
        this.progress[i] = top + nextTile.clientHeight
      }

      this.placed++
      this.element.style.minHeight = `${Math.max(...this.progress)}px`
      this.drawnWidth = this.element.clientWidth
      nextTile = next()
    }

    this.mutex = false
  }

  addTile(childElement, id, forceSingle, forceBreak) {
    const tile = document.createElement("div")
    tile.id = id
    tile.classList.add("tile")
    tile.tileIndex = this.received
    if (forceSingle) tile.classList.add("single", "force-single")
    if (forceBreak) tile.classList.add("break")
    this.tiles.push(tile)
    tile.appendChild(childElement)
    this.received++

    const nestedImages = childElement.querySelectorAll("img")
    if (nestedImages.length) {
      tile.loading = true
      Array.prototype.forEach.call(nestedImages, (img) => { img.onload = img.onerror = ()=>this.onTileLoad(tile) })
    } else {
      this.draw()
    }
  }

  onTileLoad(e) {
    e.loading = false
    this.draw()
  }

  resetDrawState() {
    this.placed = 0
    this.progress = Array.from({length:this.columnCount}, ()=>0)
  }

  observeResize() {
    const debounce = (func) => {
      var timer
      return (event) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(func,50,event)
      }
    }

    new ResizeObserver(debounce(() => this.resized(this))).observe(this.element)

    document.addEventListener('scroll', (e) => {
      this.focused = this.tiles.find( t => t.getBoundingClientRect().top >= 0 );
      this.focusedOffset = this.focused ? this.focused.getBoundingClientRect().top : 0
    })
  }

  resized(tiler) {
    if (tiler.drawnWidth != tiler.element.clientWidth && tiler.tiles.length > tiler.columnCount) {
      tiler.redraw(false)
    }
  }
}