const template = document.createElement('template');
template.innerHTML = `
<style>
  .eventsGrid {
    position: relative;
    padding: 2rem 1%;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

</style>
<div class="eventsGrid">Events!!!</div>
`;

class EventsGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('events-grid', EventsGrid);
