<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand pl-sm-0 pl-3">raj.</nuxt-link>
      <div class="col-md-auto ml-auto">
        <ul id="right-nav" class="navbar-nav right-nav">
          <li
            class="nav-item d-none d-md-block"
            v-for="(item, index) in nav"
            :key="index"
          >
            <nuxt-link :to="item.link" class="nav-link px-3">
              {{ item.text }}
            </nuxt-link>
          </li>
          <theme-toggler></theme-toggler>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  const nav = ref([
    {
      text: 'works',
      link: '/works'
    }
  ])
</script>