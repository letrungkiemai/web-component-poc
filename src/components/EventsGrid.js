const template = document.createElement('template');
template.innerHTML = `
      <div class="grid-item">
        <img src="https://betacdn.azureedge.net/images/2921299551478017-large.jpg">
      </div>
      <div class="grid-item grid-item--width2">
        <img src="https://betacdn.azureedge.net/images/216003870325654-large.jpg">
      </div>
      <div class="grid-item">
        <img src="https://betacdn.azureedge.net/images/185198296892656-large.jpg">
      </div>
      <div class="grid-item">
        <img src="https://betacdn.azureedge.net/images/2921299551478017-large.jpg">
      </div>
      <div class="grid-item">
        <img src="https://betacdn.azureedge.net/images/216003870325654-large.jpg">
      </div>
      <div class="grid-item grid-item--width3">
        <img src="https://betacdn.azureedge.net/images/185198296892656-large.jpg">
      </div>
`;

class EventsGrid extends HTMLElement {
    
    constructor() {
      super();
      let elem = document.querySelector('.grid');
    var pckry = new Packery( elem, {
    // options
    itemSelector: '.grid-item',
    gutter: 10
    });
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

customElements.define('events-grid', EventsGrid);