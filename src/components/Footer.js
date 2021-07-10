const template = document.createElement('template');
template.innerHTML = `
    <style>
    .footer {
        letter-spacing: 0px;
        position: relative;
        display: flex;
        height: auto;
        width: 100%;
        bottom: 0;
        padding-bottom: 4rem;
    }
    .footer b {
        font-size: 1.625rem;
        font-weight: 900;
        line-height: 35px;
        font-family: Playfair Display;
    }
    .footer span, .footer p {
        width: auto;
        font-weight: normal;
        line-height: 21px;
        font-family: Poppins;
    }
    .footer span:first-of-type, .footer p:first-of-type {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
    .footer span:last-of-type, .footer p:last-of-type {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
    .footer a {
        text-decoration: none;
    }
    .footer > div {
        width: 33.33%;
        display: flex;
        flex-direction: column;
        padding-left: 4rem;
    }
    
    </style>

    <footer class="footer">
        <div>
            <b>Let's get in touch</b>
            <span><router-link to="/about">About us</router-link></span>
            <span><router-link to="/contact">Contact</router-link></span>
        </div>
        <div>
            <b>Support</b>
            <span><a href="">Privacy Policy</a></span>
            <span><a href="">Terms &#38; Conditions</a></span>
        </div>
        <div>
            <b>Legal Stuff</b>
            <span><a href="">Cookies Policy</a></span>
            <span><p>&copy; CultureCat. All rights reserved.</p></span>
        </div>
    </footer>
`;
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('c-footer', Footer);
