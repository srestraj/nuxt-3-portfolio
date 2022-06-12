<template>
  <div>
    <navbar></navbar>
    <nuxt-page></nuxt-page>
    <site-footer></site-footer>
    <fixed-footer></fixed-footer>
  </div>
</template>

<script setup lang="ts">

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>