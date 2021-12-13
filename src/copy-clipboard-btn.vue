<template>
  <button :data-clipboard-text="text" class="copy-clipboard" :style="cssProps" @click="showCopyAlert($event)"
          type="button">
    <svg height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
import ClipboardJS from 'clipboard'

export default {
  computed: {
    cssProps() {
      return Object.assign({
        '--tooltip-bg-color': '#24292f',
        '--tooltip-color': '#ffffff',
      }, this.options)
    },
  },
  props: {
    copyAlertText: String,
    copyAlertTarget: String,
    options: Object,
    text: String,
  },
  methods: {
    showCopyAlert(e) {
      const div = e.target.closest('.copy-clipboard');
      div.classList.add('tooltipped');
      div.setAttribute('data-copy-text', this.copyAlertText);
      setTimeout(() => {
        div.classList.remove('tooltipped');
        div.removeAttribute('data-copy-text');
      }, 2000);
    },
  },
  watch: {
    text() {
      new ClipboardJS('.copy-clipboard')
    },
  },
}
</script>

<style>
.copy-clipboard {
  position: relative;
  line-height: 0;
  padding: .5rem;
  fill: black;
  fill-opacity: .7;
}

.copy-clipboard:not(:disabled):hover {
  fill-opacity: 1;
}

.copy-clipboard.tooltipped::before {
  content: "";
  position: absolute;
  top: auto;
  right: 50%;
  bottom: -7px;
  margin-right: -6px;
  transform: translateX(50%);
  z-index: 1000001;
  display: none;
  border: 6px solid transparent;
  border-bottom-color: var(--tooltip-bg-color);
}

.copy-clipboard.tooltipped:hover::before {
  display: inline-block;
  animation-name: tooltip-appear;
  animation-duration: .1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.copy-clipboard.tooltipped::after {
  content: attr(data-copy-text);
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  margin-top: 6px;
  z-index: 1000000;
  display: none;
  padding: 1.2em .7em;
  font-size: 80%;
  color: var(--tooltip-color, black);
  text-align: center;
  text-shadow: none;
  text-decoration: none;
  text-transform: none;
  word-wrap: break-word;
  white-space: pre;
  pointer-events: none;
  background: var(--tooltip-bg-color, white);
  border-radius: 6px;
}

.copy-clipboard.tooltipped:hover::after {
  display: inline-block;
  animation-name: tooltip-appear;
  animation-duration: .1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
</style>
