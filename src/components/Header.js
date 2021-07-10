const template = document.createElement('template');
template.innerHTML = `
    <style>
        h1 {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            margin-top: 1.5rem;
            font-weight: 900;
            line-height: 5rem;
            font-family: Playfair Display;
            letter-spacing: 0px;
        }

        .view-title {
            display: flex;
            flex-direction: column;
            text-align: center;
            opacity: 1;
        }

        .color-title {
            color: #710AE2;
            text-decoration-line: underline;
            text-decoration-thickness: 2px;
        }

        .button-container {
            width: auto;
        }
        
        .button {
            box-sizing: border-box;
            background: none;
            opacity: 1;
            text-align: center;
            font-weight: 600;
            line-height: 1.25rem;
            font-family: Poppins;
            letter-spacing: 0px;
            padding: 0.5rem 0.75rem;
            margin: 1px 0.75rem;
        }
        
    </style>
    <div class="view-title">
        <h1>Don't miss events <span class="color-title">near you</span></h1>
        <div class="button-container">
            <button class="button active">All</button>
            <button class="button">Today</button>
            <button class="button">Tonight</button>
            <button class="button">This Week</button>
            <button class="button">This Weekend</button>
        </div>
    </div>
`;
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('c-header', Header);
