import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
          id: process.env.GOOGLE_ANALYTICS_ID
        }
    })
});