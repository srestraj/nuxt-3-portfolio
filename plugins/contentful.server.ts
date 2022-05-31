import { defineNuxtPlugin } from '#app'

import { createClient } from 'contentful' // for dev
import contentful from 'contentful' // for SSR, SSG

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
  const client = createClientFunc({
    space: config.private.CTF_SPACE_ID,
    accessToken: config.private.CTF_ACCESS_TOKEN,
  })

  nuxtApp.provide('contentfulClient', client)
})