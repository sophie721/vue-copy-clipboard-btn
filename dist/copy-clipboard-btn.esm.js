import t from"clipboard";!function(t,n){void 0===n&&(n={});var o=n.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('\n.copy-clipboard {\n  position: relative;\n  line-height: 0;\n  padding: .5rem;\n  fill: black;\n  fill-opacity: .7;\n}\n\n.copy-clipboard:not(:disabled):hover {\n  fill-opacity: 1;\n}\n\n.copy-clipboard.tooltipped::before {\n  content: "";\n  position: absolute;\n  top: auto;\n  right: 50%;\n  bottom: -7px;\n  margin-right: -6px;\n  transform: translateX(50%);\n  z-index: 1000001;\n  display: none;\n  border: 6px solid var(--tooltip-bg-color);\n}\n\n.copy-clipboard.tooltipped:hover::before {\n  display: inline-block;\n  animation-name: tooltip-appear;\n  animation-duration: .1s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-in;\n}\n\n.copy-clipboard.tooltipped::after {\n  content: attr(data-copy-text);\n  position: absolute;\n  top: 100%;\n  right: 50%;\n  transform: translateX(50%);\n  margin-top: 6px;\n  z-index: 1000000;\n  display: none;\n  padding: .5em .75em;\n  font-size: 80%;\n  color: var(--tooltip-color, black);\n  text-align: center;\n  text-shadow: none;\n  text-decoration: none;\n  text-transform: none;\n  word-wrap: break-word;\n  white-space: pre;\n  pointer-events: none;\n  background: var(--tooltip-bg-color, white);\n  border-radius: 6px;\n}\n\n.copy-clipboard.tooltipped:hover::after {\n  display: inline-block;\n  animation-name: tooltip-appear;\n  animation-duration: .1s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-in;\n}\n');var n={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"copy-clipboard",style:t.cssProps,attrs:{"data-clipboard-text":t.text,type:"button"},on:{click:function(n){return t.showCopyAlert(n)}}},[o("svg",{attrs:{height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"}})]),t._v(" "),t._t("default")],2)},staticRenderFns:[],computed:{cssProps(){return Object.assign({"--tooltip-bg-color":"#24292f","--tooltip-color":"#ffffff"},this.options)}},props:{copyAlertText:String,copyAlertTarget:String,options:Object,text:String},methods:{showCopyAlert(t){const n=t.target.closest(".copy-clipboard");n.classList.add("tooltipped"),n.setAttribute("data-copy-text",this.copyAlertText),setTimeout((()=>{n.classList.remove("tooltipped"),n.removeAttribute("data-copy-text")}),2e3)}},watch:{text(){new t(".copy-clipboard")}}};function o(t){o.installed||(o.installed=!0,t.component("CopyClipboardBtn",n))}const e={install:o};let i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(e);export{n as default,o as install};
