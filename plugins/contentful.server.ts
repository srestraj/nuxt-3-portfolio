import { defineNuxtPlugin } from '#app'

// for dev
import { createClient } from 'contentful'

// for SSR, SSG
import contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
  const client = createClientFunc({
    space: config.private.CTF_SPACE_ID,
    accessToken: config.private.CTF_ACCESS_TOKEN,
  })

  nuxtApp.provide('contentfulClient', client)
})