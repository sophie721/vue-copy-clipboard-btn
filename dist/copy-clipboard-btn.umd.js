!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).CopyClipboardBtn={})}(this,(function(t){"use strict";!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("\n.copy-clipboard {\n  background: white;\n  border-color: #000;\n  fill: #000;\n  line-height: 0;\n  padding: .5rem;\n\n}\n\n.copy-clipboard:hover {\n  fill: black;\n}\n\n.copy-clipboard-wrapper.show-copy-text::after {\n  content: attr(data-copy-text);\n  margin-left: .5rem;\n}\n");var e={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"copy-clipboard-wrapper"},[o("button",{staticClass:"btn copy-clipboard",style:t.styleOptions,attrs:{"data-clipboard-text":t.text,type:"button"},on:{click:function(e){return t.showCopyAlert(e)}}},[o("svg",{attrs:{height:"15",viewBox:"0 0 24 24",width:"15",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"}})]),t._v(" "),t._t("default")],2)])},staticRenderFns:[],data:()=>({styleOptions:{}}),props:{text:String,copyAlertText:String,options:Object},methods:{showCopyAlert(t){const e=t.target.closest(".copy-clipboard-wrapper");e.classList.add("show-copy-text"),e.setAttribute("data-copy-text",this.copyAlertText),setTimeout((()=>{e.classList.remove("show-copy-text"),e.removeAttribute("data-copy-text")}),2e3)}},mounted(){this.styleOptions=this.options||{}}};function o(t){o.installed||(o.installed=!0,t.component("CopyClipboardBtn",e))}const n={install:o};let i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(n),t.default=e,t.install=o,Object.defineProperty(t,"__esModule",{value:!0})}));
