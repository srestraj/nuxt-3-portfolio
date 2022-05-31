<template>
  <div>
      <page-hero title="works" description="A selection of some of my best works including real projects and some random GitHub & Codepen links"></page-hero>
      <works-section></works-section>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Works',
    meta: [
      {
        name: 'description',
        content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
      },
      {
        property: 'og:title',
        content: 'Works'
      },
      {
        property: 'og:description',
        content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
      },
      {
        name: 'twitter:title',
        content: 'Works'
      },
      {
        name: 'twitter:description',
        content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
      }
    ]
  })
</script>

<style>

</style>