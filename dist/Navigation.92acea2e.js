// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Navigation.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
var darkLogo = "\n<svg class=\"darkLogo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"196.445\" height=\"60.961\" viewBox=\"0 0 196.445 60.961\">\n    <defs>\n        <style>.a{fill:#8c51ff;}.b{fill:#c4b8fa;}</style>\n    </defs>\n    <g transform=\"translate(-335.877 -310.926)\">\n        <g transform=\"translate(439.193 310.926)\">\n            <path class=\"a\" d=\"M561.085,351.581a18.577,18.577,0,0,0-1.592-6.992,19.845,19.845,0,0,0-5.544-7.7c-2.161-2.465-4.121-4.785-3.758-6.331,1.029-4.38,4.936-.316,8.842-3.279,1.241-.941,1.848-1.927,1.416-2.517a12.663,12.663,0,0,1-1.284-2.937c-.412-1.286.918-2.2-1.114-4.877-.751-.989-1.928-2.274-1.928-2.274s.123-.389.334-.9l-.052-.012a8.62,8.62,0,0,1,.736-1.409c.658-.982,1.008-1.431,1.007-1.432-13.8-.006-26.338,12.551-28.438,25.747a32.409,32.409,0,0,0,4.185,21.614,28.494,28.494,0,0,0,9.779,9.011,15.445,15.445,0,0,1-18.228-15.211,15.38,15.38,0,0,1,1.192-5.966,2.168,2.168,0,1,0-4-1.673,19.813,19.813,0,0,0,22.891,26.9v-6.936h0a8.571,8.571,0,0,0-2.581-6.019,37.781,37.781,0,0,0-3.123-2.27,10.1,10.1,0,0,1-2.393-2.827,11.325,11.325,0,0,1-1.162-2.767,16.56,16.56,0,0,1-.394-2.976h22.149a16.571,16.571,0,0,1-.394,2.976,11.32,11.32,0,0,1-1.162,2.767,10.1,10.1,0,0,1-2.393,2.827,37.687,37.687,0,0,0-3.124,2.27,8.568,8.568,0,0,0-2.58,6.019h0v6.013a2.223,2.223,0,0,0,.324-.176,19.869,19.869,0,0,0,8.185-6.312A18.532,18.532,0,0,0,561.085,351.581Z\" transform=\"translate(-521.11 -310.926)\"/>\n            <path class=\"a\" d=\"M569.649,378.712l-4.565,2.977-4.566,2.977a5.451,5.451,0,1,0,9.131-5.955Z\" transform=\"translate(-538.538 -340.903)\"/>\n        </g>\n        <path class=\"b\" d=\"M347.516,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.112,7.833,3.519,3.519,0,0,0,3.333-2.055h4.694a8.279,8.279,0,0,1-16.333-1.889,8.249,8.249,0,0,1,16.305-1.722Z\" transform=\"translate(0 -30.077)\"/>\n        <path class=\"b\" d=\"M378.324,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.611v8.639c0,2.027.722,2.972,2.472,2.972s2.639-1.166,2.639-3.055v-8.555h4.611V395.3Z\" transform=\"translate(-14.362 -30.495)\"/>\n        <path class=\"b\" d=\"M400.278,391.224V370.669h4.612v20.555Z\" transform=\"translate(-28.48 -26.421)\"/>\n        <path class=\"b\" d=\"M414.361,391.224V379.308h-2.277v-3.5h2.277v-5.139h4.611v5.139h2.222v3.5h-2.222v11.917Z\" transform=\"translate(-33.702 -26.421)\"/>\n        <path class=\"b\" d=\"M441.88,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.61v8.639c0,2.027.722,2.972,2.473,2.972s2.639-1.166,2.639-3.055v-8.555h4.61V395.3Z\" transform=\"translate(-42.468 -30.495)\"/>\n        <path class=\"b\" d=\"M463.535,394.881V379.465h4.333V381.1h.056a3.787,3.787,0,0,1,3.861-2.166v4.638c-2.75.028-3.639,1.056-3.639,2.806v8.5Z\" transform=\"translate(-56.455 -30.077)\"/>\n        <path class=\"b\" d=\"M484.328,388.575a3.45,3.45,0,0,0,3.611,2.917,3.242,3.242,0,0,0,2.806-1.444h4.722c-1.472,3.361-4.278,5.333-7.528,5.333a8.223,8.223,0,1,1,8.056-8.027,5.857,5.857,0,0,1-.112,1.222Zm7.056-3.111a3.641,3.641,0,0,0-7,0Z\" transform=\"translate(-63.636 -30.077)\"/>\n        <path class=\"b\" d=\"M616.688,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.111,7.833,3.52,3.52,0,0,0,3.334-2.055h4.694a8.279,8.279,0,0,1-16.334-1.889,8.25,8.25,0,0,1,16.306-1.722Z\" transform=\"translate(-119.038 -30.077)\"/>\n        <path class=\"b\" d=\"M649.88,394.881v-1.667h-.055c-.667,1.361-2.5,2.194-4.529,2.194-4.555,0-7.722-3.583-7.722-8.25,0-4.555,3.306-8.221,7.722-8.221a5.227,5.227,0,0,1,4.529,2.166h.055v-1.639h4.611v15.416Zm0-7.722a3.912,3.912,0,0,0-3.917-3.917,3.931,3.931,0,1,0,3.917,3.917Z\" transform=\"translate(-133.422 -30.077)\"/>\n        <path class=\"b\" d=\"M674.021,391.224V379.308h-2.279v-3.5h2.279v-5.139h4.61v5.139h2.222v3.5h-2.222v11.917Z\" transform=\"translate(-148.532 -26.421)\"/>\n    </g>\n</svg>\n";
var lightLogo = "\n<svg class=\"lightLogo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"196.445\" height=\"60.961\" viewBox=\"0 0 196.445 60.961\">\n    <defs>\n        <style>.c{fill:#710ae2;}.d{fill:#2f0459;}</style>\n    </defs>\n    <g transform=\"translate(-335.877 -310.926)\">\n        <g transform=\"translate(439.193 310.926)\">\n            <path class=\"c\" d=\"M561.085,351.581a18.577,18.577,0,0,0-1.592-6.992,19.845,19.845,0,0,0-5.544-7.7c-2.161-2.465-4.121-4.785-3.758-6.331,1.029-4.38,4.936-.316,8.842-3.279,1.241-.941,1.848-1.927,1.416-2.517a12.663,12.663,0,0,1-1.284-2.937c-.412-1.286.918-2.2-1.114-4.877-.751-.989-1.928-2.274-1.928-2.274s.123-.389.334-.9l-.052-.012a8.62,8.62,0,0,1,.736-1.409c.658-.982,1.008-1.431,1.007-1.432-13.8-.006-26.338,12.551-28.438,25.747a32.409,32.409,0,0,0,4.185,21.614,28.494,28.494,0,0,0,9.779,9.011,15.445,15.445,0,0,1-18.228-15.211,15.38,15.38,0,0,1,1.192-5.966,2.168,2.168,0,1,0-4-1.673,19.813,19.813,0,0,0,22.891,26.9v-6.936h0a8.571,8.571,0,0,0-2.581-6.019,37.781,37.781,0,0,0-3.123-2.27,10.1,10.1,0,0,1-2.393-2.827,11.325,11.325,0,0,1-1.162-2.767,16.56,16.56,0,0,1-.394-2.976h22.149a16.571,16.571,0,0,1-.394,2.976,11.32,11.32,0,0,1-1.162,2.767,10.1,10.1,0,0,1-2.393,2.827,37.687,37.687,0,0,0-3.124,2.27,8.568,8.568,0,0,0-2.58,6.019h0v6.013a2.223,2.223,0,0,0,.324-.176,19.869,19.869,0,0,0,8.185-6.312A18.532,18.532,0,0,0,561.085,351.581Z\" transform=\"translate(-521.11 -310.926)\"/>\n            <path class=\"c\" d=\"M569.649,378.712l-4.565,2.977-4.566,2.977a5.451,5.451,0,1,0,9.131-5.955Z\" transform=\"translate(-538.538 -340.903)\"/>\n        </g>\n        <path class=\"d\" d=\"M347.516,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.112,7.833,3.519,3.519,0,0,0,3.333-2.055h4.694a8.279,8.279,0,0,1-16.333-1.889,8.249,8.249,0,0,1,16.305-1.722Z\" transform=\"translate(0 -30.077)\"/>\n        <path class=\"d\" d=\"M378.324,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.611v8.639c0,2.027.722,2.972,2.472,2.972s2.639-1.166,2.639-3.055v-8.555h4.611V395.3Z\" transform=\"translate(-14.362 -30.495)\"/>\n        <path class=\"d\" d=\"M400.278,391.224V370.669h4.612v20.555Z\" transform=\"translate(-28.48 -26.421)\"/>\n        <path class=\"d\" d=\"M414.361,391.224V379.308h-2.277v-3.5h2.277v-5.139h4.611v5.139h2.222v3.5h-2.222v11.917Z\" transform=\"translate(-33.702 -26.421)\"/>\n        <path class=\"d\" d=\"M441.88,395.3V393.66h-.056c-.667,1.417-1.889,2.138-3.972,2.138-3.25,0-5.944-1.944-5.944-6.333v-9.583h4.61v8.639c0,2.027.722,2.972,2.473,2.972s2.639-1.166,2.639-3.055v-8.555h4.61V395.3Z\" transform=\"translate(-42.468 -30.495)\"/>\n        <path class=\"d\" d=\"M463.535,394.881V379.465h4.333V381.1h.056a3.787,3.787,0,0,1,3.861-2.166v4.638c-2.75.028-3.639,1.056-3.639,2.806v8.5Z\" transform=\"translate(-56.455 -30.077)\"/>\n        <path class=\"d\" d=\"M484.328,388.575a3.45,3.45,0,0,0,3.611,2.917,3.242,3.242,0,0,0,2.806-1.444h4.722c-1.472,3.361-4.278,5.333-7.528,5.333a8.223,8.223,0,1,1,8.056-8.027,5.857,5.857,0,0,1-.112,1.222Zm7.056-3.111a3.641,3.641,0,0,0-7,0Z\" transform=\"translate(-63.636 -30.077)\"/>\n        <path class=\"d\" d=\"M616.688,385.409a3.548,3.548,0,0,0-3.445-2.167,3.93,3.93,0,0,0,.111,7.833,3.52,3.52,0,0,0,3.334-2.055h4.694a8.279,8.279,0,0,1-16.334-1.889,8.25,8.25,0,0,1,16.306-1.722Z\" transform=\"translate(-119.038 -30.077)\"/>\n        <path class=\"d\" d=\"M649.88,394.881v-1.667h-.055c-.667,1.361-2.5,2.194-4.529,2.194-4.555,0-7.722-3.583-7.722-8.25,0-4.555,3.306-8.221,7.722-8.221a5.227,5.227,0,0,1,4.529,2.166h.055v-1.639h4.611v15.416Zm0-7.722a3.912,3.912,0,0,0-3.917-3.917,3.931,3.931,0,1,0,3.917,3.917Z\" transform=\"translate(-133.422 -30.077)\"/>\n        <path class=\"d\" d=\"M674.021,391.224V379.308h-2.279v-3.5h2.279v-5.139h4.61v5.139h2.222v3.5h-2.222v11.917Z\" transform=\"translate(-148.532 -26.421)\"/>\n    </g>\n    </svg>\n";
var searchIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.62\" height=\"21.382\" viewBox=\"0 0 19.62 21.382\">\n    <defs>\n        <style>.e,.f,.h{fill:none;}.e,.f{stroke:#928fa2;stroke-width:1.6px;}.f{stroke-linecap:round;}.g{stroke:none;}</style>\n    </defs>\n    <g transform=\"translate(1.13)\">\n        <g class=\"e\" transform=\"translate(0.863)\">\n            <ellipse class=\"g\" cx=\"8.814\" cy=\"8.832\" rx=\"8.814\" ry=\"8.832\"/>\n            <ellipse class=\"h\" cx=\"8.814\" cy=\"8.832\" rx=\"8.014\" ry=\"8.032\"/>\n        </g>\n        <line class=\"f\" x1=\"4.31\" y2=\"4.815\" transform=\"translate(0 15.437)\"/>\n    </g>\n</svg>\n";
var heartIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17.842\" viewBox=\"0 0 20 17.842\">\n   <defs>\n      <style>.i{fill:none;stroke-linecap:round;}.j,.k{stroke:none;}.k{fill:#928fa2;}</style>\n   </defs>\n   <g class=\"i\" transform=\"translate(-37 -59.628)\">\n      <path class=\"j\" d=\"M52,59.628a5,5,0,0,1,5,5c0,5-5,7.845-10,12.843-5-5-10-7.845-10-12.843a5,5,0,0,1,5-5c2.5,0,3.749,1.25,5,3.749C48.247,60.878,49.5,59.628,52,59.628Z\"/>\n      <path class=\"k\" d=\"M 51.99542999267578 60.92799377441406 C 50.21707153320312 60.92799377441406 49.32096099853516 61.635986328125 48.16006088256836 63.95820617675781 L 46.99747085571289 66.28378295898438 L 45.83454895019531 63.95836639404297 C 44.67317962646484 61.63605499267578 43.77693939208984 60.92803955078125 41.99863052368164 60.92803955078125 C 39.95920181274414 60.92803955078125 38.29999923706055 62.58723449707031 38.29999923706055 64.62667846679688 C 38.29999923706055 66.07716369628906 38.79283905029297 67.36600494384766 39.89799118041992 68.80564880371094 C 40.97900009155273 70.21383666992188 42.49917984008789 71.57345581054688 44.2594108581543 73.14776611328125 C 45.15081405639648 73.94502258300781 46.06498336791992 74.76263427734375 46.99725341796875 75.65306091308594 C 47.93157196044922 74.76071929931641 48.84800338745117 73.94142150878906 49.74148941040039 73.14263916015625 C 51.50131988525391 71.56932830810547 53.02116012573242 70.21057891845703 54.10211181640625 68.80307006835938 C 55.20719146728516 67.3641357421875 55.70000076293945 66.07607269287109 55.70000076293945 64.62662506103516 C 55.70000076293945 62.58719635009766 54.03813934326172 60.92799377441406 51.99542999267578 60.92799377441406 M 51.99542999267578 59.62799835205078 C 54.7607307434082 59.62799835205078 57 61.86681365966797 57 64.62662506103516 C 57 69.62526702880859 51.99542999267578 72.47138977050781 46.99726104736328 77.47004699707031 C 41.99863052368164 72.47138977050781 37 69.62526702880859 37 64.62667846679688 C 37 61.86686706542969 39.2392692565918 59.62803649902344 41.99863052368164 59.62803649902344 C 44.49771118164062 59.62803649902344 45.74748992919922 60.87782287597656 46.99726104736328 63.37690734863281 C 48.24657821655273 60.87782287597656 49.4963493347168 59.62799835205078 51.99542999267578 59.62799835205078 Z\"/>\n   </g>\n</svg>\n";
var moreIcon = "\n<svg class=\"moreIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"24\" viewBox=\"0 0 6 24\">\n   <defs>\n      <style>.l{fill:#928fa2;}</style>\n   </defs>\n   <circle class=\"l\" cx=\"3\" cy=\"3\" r=\"3\"/>\n   <circle class=\"l\" cx=\"3\" cy=\"3\" r=\"3\" transform=\"translate(0 9)\"/>\n   <circle class=\"l\" cx=\"3\" cy=\"3\" r=\"3\" transform=\"translate(0 18)\"/>\n</svg>\n";
template.innerHTML = "\n    <style>\n        .darkLogo {\n            display: none;\n        }\n\n        nav {\n            background: #FFFFFF 0% 0% no-repeat padding-box;\n            box-shadow: 0px 3px 30px #1e1a341a;\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            flex-direction: row;\n            top: 0px;\n            left: 0px;\n            opacity: 1;\n            height: 90px;\n            max-width: 100vw;\n        }\n        \n        .navbar-brand {\n            max-height: inherit;\n            padding: 0 150px;\n            display: flex;\n            align-items: center;\n        }\n        \n        .navbar-search {\n            display: flex;\n            height: auto;\n            align-items: center;\n            justify-content: center;\n            align-content: center;\n            flex: auto;\n            width: max-content;\n        }\n        \n        .navbar-icons {\n            display: flex;\n            margin-left: auto;\n            align-items: center;\n            padding: 0 150px;\n        }\n        \n        .input-group{\n            display: flex;\n            align-items: center;\n            align-content: center;\n            justify-content: center;\n            width: min-content;\n            flex: auto 1;\n        }\n\n        .input {\n            background: #FFFFFF 0% 0% no-repeat padding-box;\n            border: 1px solid #E0D5E6;\n            color: #BFB2C6;\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            font-family: 'Poppins';\n            height: 3em;\n            width: 100%;\n            opacity: 1;\n            margin-left: 2px;\n            margin-top: 1px;\n            margin-bottom: 1px;\n            &:hover {\n                margin-top: 0;\n                margin-bottom: 0;\n            }\n        }\n        \n        .icon-left {\n            padding: 9px 16px 0 16px;\n        }\n\n        .icon-button {\n            padding: 0 16px;\n        }\n\n        .moreIcon {\n            max-height: 20px !important;\n        }\n                \n    </style>\n    <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n        <div class=\"navbar-brand\">\n            <a href=\"/\">\n                ".concat(darkLogo, "\n                ").concat(lightLogo, "\n            </a>\n        </div>\n\n        <div class=\"navbar-search\">\n            <div class=\"input-group\">\n                <div class=\"input\" name=\"search-bar\" id=\"search-bar\">\n                    <span class=\"icon-left header-icon\">").concat(searchIcon, "</span>\n                    What can we help you find?\n                </div>\n            </div>\n        </div>\n\n        <div class=\"navbar-icons\">\n            <span class=\"icon-button\">").concat(heartIcon, "</span>\n            <span class=\"icon-button\">").concat(moreIcon, "</span>\n        </div>\n    </nav>\n");

var Navigation = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Navigation, _HTMLElement);

  var _super = _createSuper(Navigation);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    return _this;
  }

  return Navigation;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('c-navigation', Navigation);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51582" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/Navigation.js"], null)
//# sourceMappingURL=/Navigation.92acea2e.js.map