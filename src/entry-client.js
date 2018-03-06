import Vue from 'vue'
// import { createApp } from './site1/app'

const file = (window.location.hostname.indexOf('site1') >= 0 ? './site1/app': './site2/app')

loadSite(file)

const loadSite = async (file) => {
  const { createApp } = await import(file)

  const { app, router, store } = createApp()

  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }

  // This assumes App.vue template root element has `id="app"`
  app.$mount('#app')

}