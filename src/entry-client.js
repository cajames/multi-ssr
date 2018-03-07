import Vue from 'vue'
// import { createApp } from './site1/app'

const file = (window.location.hostname.indexOf('site1') >= 0 ? 'site1': 'site2')

const loadSite = (siteName) => {

  // This is important, only download the relevant Webpack Chunk

  import(/* webpackChunkName: "site-[request]" */ `./${siteName}/app`)
    .then(({ createApp }) => {
      const { app, router, store } = createApp()

      if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__)
      }

      // This assumes App.vue template root element has `id="app"`
      app.$mount('#app')
    })

}

loadSite(file)
