const template = document.createElement('template');

const darkLogo = `
<svg id="dark-logo" xmlns="http://www.w3.org/2000/svg" width="196.445" height="60.961" viewBox="0 0 196.445 60.961">
    <defs>
        <style>.a{fill:#8c51ff;}.b{fill:#c4b8fa;}</style>
    </defs>
    <g transform="translate(-335.877 -310.926)">
        <g transform="translate(439.193 310.926)">
            <path class="a" d="M561.085,351.581a18.577,18.577,0,0,0-1.592-6.992,19.845,19.845,0,0,0-5.544-7.7c-2.161-2.465-4.121-4.785-3.758-6.331,1.029-4.38,4.936-.316,8.842-3.279,1.241-.941,1.848-1.927,1.416-2.517a12.663,12.663,0,0,1-1.284-2.937c-.412-1.286.918-2.2-1.114-4.877-.751-.989-1.928-2.274-1.928-2.274s.123-.389.334-.9l-.052-.012a8.62,8.62,0,0,1,.736-1.409c.658-.982,1.008-1.431,1.007-1.432-13.8-.006-26.338,12.551-28.438,25.747a32.409,32.409,0,0,0,4.185,21.614,28.494,28.494,0,0,0,9.779,9.011,15.445,15.445,0,0,1-18.228-15.211,15.38,15.38,0,0,1,1.192-5.966,2.168,2.168,0,1,0-4-1.673,19.813,19.813,0,0,0,22.891,26.9v-6.936h0a8.571,8.571,0,0,0-2.581-6.019,37.781,37.781,0,0,0-3.123-2.27,10.1,10.1,0,0,1-2.393-2.827,11.325,11.325,0,0,1-1.162-2.767,16.56,16.56,0,0,1-.394-2.976h22.149a16.571,16.571,0,0,1-.394,2.976,11.32,11.32,0,0,1-1.162,2.767,10.1,10.1,0,0,1-2.393,2.827,37.687,37.687,0,0,0-3.124,2.27,8.568,8.568,0,0,0-2.58,6.019h0v6.013a2.223,2.223,0,0,0,.324-.176,19.869,19.869,0,0,0,8.185-6.312A18.532,18.532,0,0,0,561.085,351.581Z" transform="translate(-521.11 -310.926)"/>
            <path class="a" d="M569.649,378.712l-4.565,2.977-4.566,2.977a5.451,5.451,0,1,0,9.131-5.955Z" transform="translate(-538.538 -340.903)"/>
        </g>
        <path class="b" d="M347.516,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.112,7.833,3.519,3.519,0,0,0,3.333-2.055h4.694a8.279,8.279,0,0,1-16.333-1.889,8.249,8.249,0,0,1,16.305-1.722Z" transform="translate(0 -30.077)"/>
        <path class="b" d="M378.324,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.611v8.639c0,2.027.722,2.972,2.472,2.972s2.639-1.166,2.639-3.055v-8.555h4.611V395.3Z" transform="translate(-14.362 -30.495)"/>
        <path class="b" d="M400.278,391.224V370.669h4.612v20.555Z" transform="translate(-28.48 -26.421)"/>
        <path class="b" d="M414.361,391.224V379.308h-2.277v-3.5h2.277v-5.139h4.611v5.139h2.222v3.5h-2.222v11.917Z" transform="translate(-33.702 -26.421)"/>
        <path class="b" d="M441.88,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.61v8.639c0,2.027.722,2.972,2.473,2.972s2.639-1.166,2.639-3.055v-8.555h4.61V395.3Z" transform="translate(-42.468 -30.495)"/>
        <path class="b" d="M463.535,394.881V379.465h4.333V381.1h.056a3.787,3.787,0,0,1,3.861-2.166v4.638c-2.75.028-3.639,1.056-3.639,2.806v8.5Z" transform="translate(-56.455 -30.077)"/>
        <path class="b" d="M484.328,388.575a3.45,3.45,0,0,0,3.611,2.917,3.242,3.242,0,0,0,2.806-1.444h4.722c-1.472,3.361-4.278,5.333-7.528,5.333a8.223,8.223,0,1,1,8.056-8.027,5.857,5.857,0,0,1-.112,1.222Zm7.056-3.111a3.641,3.641,0,0,0-7,0Z" transform="translate(-63.636 -30.077)"/>
        <path class="b" d="M616.688,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.111,7.833,3.52,3.52,0,0,0,3.334-2.055h4.694a8.279,8.279,0,0,1-16.334-1.889,8.25,8.25,0,0,1,16.306-1.722Z" transform="translate(-119.038 -30.077)"/>
        <path class="b" d="M649.88,394.881v-1.667h-.055c-.667,1.361-2.5,2.194-4.529,2.194-4.555,0-7.722-3.583-7.722-8.25,0-4.555,3.306-8.221,7.722-8.221a5.227,5.227,0,0,1,4.529,2.166h.055v-1.639h4.611v15.416Zm0-7.722a3.912,3.912,0,0,0-3.917-3.917,3.931,3.931,0,1,0,3.917,3.917Z" transform="translate(-133.422 -30.077)"/>
        <path class="b" d="M674.021,391.224V379.308h-2.279v-3.5h2.279v-5.139h4.61v5.139h2.222v3.5h-2.222v11.917Z" transform="translate(-148.532 -26.421)"/>
    </g>
</svg>
`;

const lightLogo = `
<svg id="light-logo" xmlns="http://www.w3.org/2000/svg" width="196.445" height="60.961" viewBox="0 0 196.445 60.961">
    <defs>
        <style>.a{fill:#710ae2;}.b{fill:#2f0459;}</style>
    </defs>
    <g transform="translate(-335.877 -310.926)">
        <g transform="translate(439.193 310.926)">
            <path class="a" d="M561.085,351.581a18.577,18.577,0,0,0-1.592-6.992,19.845,19.845,0,0,0-5.544-7.7c-2.161-2.465-4.121-4.785-3.758-6.331,1.029-4.38,4.936-.316,8.842-3.279,1.241-.941,1.848-1.927,1.416-2.517a12.663,12.663,0,0,1-1.284-2.937c-.412-1.286.918-2.2-1.114-4.877-.751-.989-1.928-2.274-1.928-2.274s.123-.389.334-.9l-.052-.012a8.62,8.62,0,0,1,.736-1.409c.658-.982,1.008-1.431,1.007-1.432-13.8-.006-26.338,12.551-28.438,25.747a32.409,32.409,0,0,0,4.185,21.614,28.494,28.494,0,0,0,9.779,9.011,15.445,15.445,0,0,1-18.228-15.211,15.38,15.38,0,0,1,1.192-5.966,2.168,2.168,0,1,0-4-1.673,19.813,19.813,0,0,0,22.891,26.9v-6.936h0a8.571,8.571,0,0,0-2.581-6.019,37.781,37.781,0,0,0-3.123-2.27,10.1,10.1,0,0,1-2.393-2.827,11.325,11.325,0,0,1-1.162-2.767,16.56,16.56,0,0,1-.394-2.976h22.149a16.571,16.571,0,0,1-.394,2.976,11.32,11.32,0,0,1-1.162,2.767,10.1,10.1,0,0,1-2.393,2.827,37.687,37.687,0,0,0-3.124,2.27,8.568,8.568,0,0,0-2.58,6.019h0v6.013a2.223,2.223,0,0,0,.324-.176,19.869,19.869,0,0,0,8.185-6.312A18.532,18.532,0,0,0,561.085,351.581Z" transform="translate(-521.11 -310.926)"/>
            <path class="a" d="M569.649,378.712l-4.565,2.977-4.566,2.977a5.451,5.451,0,1,0,9.131-5.955Z" transform="translate(-538.538 -340.903)"/>
        </g>
        <path class="b" d="M347.516,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.112,7.833,3.519,3.519,0,0,0,3.333-2.055h4.694a8.279,8.279,0,0,1-16.333-1.889,8.249,8.249,0,0,1,16.305-1.722Z" transform="translate(0 -30.077)"/>
        <path class="b" d="M378.324,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.611v8.639c0,2.027.722,2.972,2.472,2.972s2.639-1.166,2.639-3.055v-8.555h4.611V395.3Z" transform="translate(-14.362 -30.495)"/>
        <path class="b" d="M400.278,391.224V370.669h4.612v20.555Z" transform="translate(-28.48 -26.421)"/>
        <path class="b" d="M414.361,391.224V379.308h-2.277v-3.5h2.277v-5.139h4.611v5.139h2.222v3.5h-2.222v11.917Z" transform="translate(-33.702 -26.421)"/>
        <path class="b" d="M441.88,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.61v8.639c0,2.027.722,2.972,2.473,2.972s2.639-1.166,2.639-3.055v-8.555h4.61V395.3Z" transform="translate(-42.468 -30.495)"/>
        <path class="b" d="M463.535,394.881V379.465h4.333V381.1h.056a3.787,3.787,0,0,1,3.861-2.166v4.638c-2.75.028-3.639,1.056-3.639,2.806v8.5Z" transform="translate(-56.455 -30.077)"/>
        <path class="b" d="M484.328,388.575a3.45,3.45,0,0,0,3.611,2.917,3.242,3.242,0,0,0,2.806-1.444h4.722c-1.472,3.361-4.278,5.333-7.528,5.333a8.223,8.223,0,1,1,8.056-8.027,5.857,5.857,0,0,1-.112,1.222Zm7.056-3.111a3.641,3.641,0,0,0-7,0Z" transform="translate(-63.636 -30.077)"/>
        <path class="b" d="M616.688,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.111,7.833,3.52,3.52,0,0,0,3.334-2.055h4.694a8.279,8.279,0,0,1-16.334-1.889,8.25,8.25,0,0,1,16.306-1.722Z" transform="translate(-119.038 -30.077)"/>
        <path class="b" d="M649.88,394.881v-1.667h-.055c-.667,1.361-2.5,2.194-4.529,2.194-4.555,0-7.722-3.583-7.722-8.25,0-4.555,3.306-8.221,7.722-8.221a5.227,5.227,0,0,1,4.529,2.166h.055v-1.639h4.611v15.416Zm0-7.722a3.912,3.912,0,0,0-3.917-3.917,3.931,3.931,0,1,0,3.917,3.917Z" transform="translate(-133.422 -30.077)"/>
        <path class="b" d="M674.021,391.224V379.308h-2.279v-3.5h2.279v-5.139h4.61v5.139h2.222v3.5h-2.222v11.917Z" transform="translate(-148.532 -26.421)"/>
    </g>
    </svg>
`;

const searchIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="19.62" height="21.382" viewBox="0 0 19.62 21.382">
    <defs>
        <style>.a,.b,.d{fill:none;}.a,.b{stroke:#928fa2;stroke-width:1.6px;}.b{stroke-linecap:round;}.c{stroke:none;}</style>
    </defs>
    <g transform="translate(1.13)">
        <g class="a" transform="translate(0.863)">
            <ellipse class="c" cx="8.814" cy="8.832" rx="8.814" ry="8.832"/>
            <ellipse class="d" cx="8.814" cy="8.832" rx="8.014" ry="8.032"/>
        </g>
        <line class="b" x1="4.31" y2="4.815" transform="translate(0 15.437)"/>
    </g>
</svg>
`;

const heartIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="26.731" height="23.847" viewBox="0 0 26.731 23.847">
   <defs>
      <style>.a{fill:none;}.b,.c{stroke:none;}.c{fill:#fff;}</style>
   </defs>
   <g class="a" transform="translate(-37 -59.628)">
      <path class="b" d="M57.042,59.628a6.684,6.684,0,0,1,6.689,6.681c0,6.681-6.689,10.485-13.369,17.166C43.681,76.794,37,72.99,37,66.309a6.683,6.683,0,0,1,6.681-6.681c3.34,0,5.01,1.67,6.681,5.011C52.031,61.3,53.7,59.628,57.042,59.628Z"/>
      <path class="c" d="M 57.04198455810547 61.12799835205078 C 54.5829963684082 61.12799835205078 53.28577423095703 62.14401245117188 51.70342636108398 65.30928039550781 L 50.36198425292969 67.99266052246094 L 49.02014541625977 65.30947875976562 C 47.43716430664062 62.14411163330078 46.13977432250977 61.12805938720703 43.68086624145508 61.12805938720703 C 40.82412338256836 61.12805938720703 38.49999618530273 63.45218658447266 38.49999618530273 66.30892944335938 C 38.49999618530273 68.27639007568359 39.19425582885742 70.09712982177734 40.68488311767578 72.03890228271484 C 42.14320373535156 73.93860626220703 44.18266296386719 75.76265716552734 46.54415512084961 77.87473297119141 C 47.78622055053711 78.98560333251953 49.06153869628906 80.126220703125 50.36171722412109 81.37498474121094 C 51.66469573974609 80.12356567382812 52.9428596496582 78.98088836669922 54.18778610229492 77.86789703369141 C 56.54874420166016 75.75717926025391 58.58774566650391 73.93428802490234 60.04600524902344 72.03549957275391 C 61.53655624389648 70.09465026855469 62.23078536987305 68.27497100830078 62.23078536987305 66.30886077880859 C 62.23078536987305 63.45211791992188 59.90309524536133 61.12799835205078 57.04198455810547 61.12799835205078 M 57.04198455810547 59.62799835205078 C 60.7379035949707 59.62799835205078 63.73078536987305 62.62026977539062 63.73078536987305 66.30886077880859 C 63.73078536987305 72.98973846435547 57.04198455810547 76.79369354248047 50.36173629760742 83.47459411621094 C 43.68086624145508 76.79369354248047 36.99999618530273 72.98973846435547 36.99999618530273 66.30892944335938 C 36.99999618530273 62.62033843994141 39.99287414550781 59.62805938720703 43.68086624145508 59.62805938720703 C 47.0209846496582 59.62805938720703 48.69136428833008 61.29843139648438 50.36173629760742 64.63855743408203 C 52.031494140625 61.29843139648438 53.70186614990234 59.62799835205078 57.04198455810547 59.62799835205078 Z"/>
   </g>
</svg>
`;

const moreIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="24" viewBox="0 0 6 24">
   <defs>
      <style>.a{fill:#928fa2;}</style>
   </defs>
   <circle class="a" cx="3" cy="3" r="3"/>
   <circle class="a" cx="3" cy="3" r="3" transform="translate(0 9)"/>
   <circle class="a" cx="3" cy="3" r="3" transform="translate(0 18)"/>
</svg>
`;

template.innerHTML = `
    <style>
        
    </style>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a href="/">
                ${darkLogo}
                ${lightLogo}
            </a>
        </div>

        <div class="navbar-search">
            <div class="input-group">
                <div class="input" name="search-bar" id="search-bar">
                    <span class="icon-left header-icon">${searchIcon}</span>
                    What can we help you find?
                </div>
            </div>
        </div>

        <div class="navbar-icons">
            <span class="icon-button">${heartIcon}</span>
            <span class="icon-button" style="padding: 0 0.5rem;">${moreIcon}</span>
        </div>
    </nav>
`;

class Navigation extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

customElements.define('c-navigation', Navigation);