!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var i={startBtn:document.querySelector("[data-start"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};i.stopBtn.disabled=!0,i.startBtn.addEventListener("click",(function(){r.start(),i.startBtn.disabled=!0,i.stopBtn.disabled=!1})),i.stopBtn.addEventListener("click",(function(){r.stop(),i.startBtn.disabled=!1,i.stopBtn.disabled=!0,i.body.style.backgroundColor=""}));var r=new(function(){"use strict";function o(n){var i=n.onSwitch;t(e)(this,o),this.intervalId=null,this.isActive=!1,this.onSwitch=i}return t(n)(o,[{key:"start",value:function(){var t=this;this.isActive||(this.onSwitch(),this.isActive=!0,this.intervalId=setInterval((function(){t.onSwitch()}),1e3))}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1}}]),o}())({onSwitch:function(){i.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}})}();
//# sourceMappingURL=01-color-switcher.e2363453.js.map
