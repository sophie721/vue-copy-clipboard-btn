<template>
  <button :data-clipboard-text="text" class="btn copy-clipboard" :style="styleOptions" @click="showCopyAlert($event)">
    <svg height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/>
    </svg>
  </button>
</template>

<script>
export default {
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
  },
  mounted() {
    this.styleOptions = this.options || {}
  },
}
</script>

<style>
.copy-clipboard {
  background: white;
  border-color: #fff;
  fill: #fff;
  line-height: 0;
  padding: .5rem;

}

.copy-clipboard:hover {
  fill: black;
}

.copy-clipboard.show-copy-text::after {
  content: attr(data-copy-text);
  margin-left: .5rem;
}
</style>
