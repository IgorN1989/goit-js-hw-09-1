const t={startBtn:document.querySelector("[data-start"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){s.start(),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){s.stop(),t.startBtn.disabled=!1,t.stopBtn.disabled=!0,t.body.style.backgroundColor=""}));const s=new class{start(){this.isActive||(this.onSwitch(),this.isActive=!0,this.intervalId=setInterval((()=>{this.onSwitch()}),1e3))}stop(){clearInterval(this.intervalId),this.isActive=!1}constructor({onSwitch:t}){this.intervalId=null,this.isActive=!1,this.onSwitch=t}}({onSwitch:function(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}});
//# sourceMappingURL=01-color-switcher.a2b731c4.js.map
