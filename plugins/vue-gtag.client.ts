import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public
  
    nuxtApp.vueApp.use(VueGtag, {
        property: { 
          id: config.GOOGLE_ANALYTICS_ID
        }
    })
});