!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&i(t.prototype,e);n&&i(t,n);return t};var o={startBtn:document.querySelector("[data-start"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};o.stopBtn.disabled=!0;var s=new(function(){"use strict";function i(n){var o=n.onSwitch,s=n.startBtn,r=n.stopBtn,a=n.body;t(e)(this,i),this.startBtn=s,this.stopBtn=r,this.body=a,this.intervalId=null,this.isActive=!1,this.onSwitch=o}return t(n)(i,[{key:"start",value:function(){var t=this;this.isActive||(this.startBtn.disabled=!0,this.stopBtn.disabled=!1,this.onSwitch(),this.isActive=!0,this.intervalId=setInterval((function(){t.onSwitch()}),1e3))}},{key:"stop",value:function(){this.startBtn.disabled=!1,this.stopBtn.disabled=!0,this.body.style.backgroundColor="",clearInterval(this.intervalId),this.isActive=!1}}]),i}())({onSwitch:function(){o.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))},startBtn:o.startBtn,stopBtn:o.stopBtn,body:o.body});o.startBtn.addEventListener("click",s.start.bind(s)),o.stopBtn.addEventListener("click",s.stop.bind(s))}();
//# sourceMappingURL=01-color-switcher.b8005d87.js.map
