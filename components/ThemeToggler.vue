<template>
  <li class="nav-item theme-toggler" @click="switchTheme">
      <icons-sun v-if="$colorMode.preference == 'light'" />
      <icons-moon v-if="$colorMode.preference == 'dark'" />
      <icons-system v-if="$colorMode.preference == 'system'" />
  </li>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()
  
  const switchTheme = () => {
    if (colorMode.preference == 'light') {
        colorMode.preference = 'dark'
        } else if (colorMode.preference == 'dark') {
        colorMode.preference = 'system'
        } else if (colorMode.preference == 'system') {
        colorMode.preference = 'light'
    }
  }
</script>