!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).CopyClipboardBtn={})}(this,(function(t){"use strict";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("\n.copy-clipboard {\n  background: white;\n  border-color: #fff;\n  fill: #fff;\n  line-height: 0;\n  padding: .5rem;\n\n}\n\n.copy-clipboard:hover {\n  fill: black;\n}\n\n.copy-clipboard.show-copy-text::after {\n  content: attr(data-copy-text);\n  margin-left: .5rem;\n}\n");var e={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn copy-clipboard",style:t.styleOptions,attrs:{"data-clipboard-text":t.text},on:{click:function(e){return t.showCopyAlert(e)}}},[n("svg",{attrs:{height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"}})])])},staticRenderFns:[],data:()=>({styleOptions:{}}),props:{text:String,copyAlertText:String,options:Object},methods:{showCopyAlert(t){const e=t.target.closest(".copy-clipboard-wrapper");e.classList.add("show-copy-text"),e.setAttribute("data-copy-text",this.copyAlertText),setTimeout((()=>{e.classList.remove("show-copy-text"),e.removeAttribute("data-copy-text")}),2e3)}},mounted(){this.styleOptions=this.options||{}}};function n(t){n.installed||(n.installed=!0,t.component("CopyClipboardBtn",e))}const o={install:n};let i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(o),t.default=e,t.install=n,Object.defineProperty(t,"__esModule",{value:!0})}));
