import { openBlock, createElementBlock, createElementVNode, normalizeStyle, pushScopeId, popScopeId } from 'vue';

var script = {
  data: () => ({
    styleOptions: {},
  }),
  props: {
    text: String,
    copyAlertText: String,
    options: Object,
  },
  methods: {
    showCopyAlert(e) {
      const div = e.target.closest(".copy-clipboard-wrapper");
      div.classList.add('show-copy-text');
      div.setAttribute('data-copy-text', this.copyAlertText);
      setTimeout(() => {
        div.classList.remove('show-copy-text');
        div.removeAttribute('data-copy-text');
      }, 2000);
    },
    mounted() {
      this.styleOptions = Object.assign({
        background: '#fff',
        borderColor: '#000',
        fill: '#000',
      }, this.options);
    },
  },
};

const _withScopeId = n => (pushScopeId("data-v-6457b266"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "copy-clipboard-wrapper" };
const _hoisted_2 = ["data-clipboard-text"];
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("svg", {
  height: "15",
  viewBox: "0 0 24 24",
  width: "15",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /*#__PURE__*/createElementVNode("path", { d: "M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z" })
], -1 /* HOISTED */));
const _hoisted_4 = [
  _hoisted_3
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("button", {
      "data-clipboard-text": $props.text,
      class: "btn copy-clipboard",
      style: normalizeStyle(_ctx.styleOptions),
      onClick: _cache[0] || (_cache[0] = $event => ($options.showCopyAlert($event)))
    }, _hoisted_4, 12 /* STYLE, PROPS */, _hoisted_2)
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.copy-clipboard[data-v-6457b266] {\n  line-height: 0;\n  padding: .5rem;\n}\n.copy-clipboard[data-v-6457b266]:hover {\n  fill: black;\n}\n.show-copy-text[data-v-6457b266]::after {\n  content: attr(data-copy-text);\n  margin-left: .5rem;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-6457b266";
script.__file = "src/copy-clipboard-btn.vue";

function install(Vue) {
    if (install.installed)  return;
    install.installed = true;
    Vue.component('CopyClipboardBtn', script);
}

const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

export { script as default, install };