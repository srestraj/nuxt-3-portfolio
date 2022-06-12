<template>
  <section class="py-lg-5 py-4">
    <div class="container">
        <div class="row">
          <div class="col-12 my-auto text-center">
            <p class="header-text">{{ title }}</p>
            <p class="sub-text">{{ description }}</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts" setup>
  interface Props {
    title: string
    description: string
  }

  defineProps<Props>()
</script>
