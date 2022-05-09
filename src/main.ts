import { createApp, h } from '@vue/composition-api'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
