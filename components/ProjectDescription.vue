<template>
  <div class="row justify-content-center">
      <div class="col-md-4 col-12 mb-3 project-info">
          <h5>Role</h5>
          <div class="line"></div>
          <p>{{ project.role }}</p>
      </div>
      <div class="col-md-4 col-12 mb-3 project-info">
          <h5>Year</h5>
          <div class="line"></div>
          <p>{{ year }}</p>
      </div>
      <div class="col-md-4 col-12 mb-3 project-info">
          <h5>Visit Website</h5>
          <div class="line"></div>
          <a :href="project.site" target="_blank" rel="noopener noreferrer">
            <span>{{ formattedURL }}</span>
          </a>
      </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * Define props
 */
interface Props {
  project: {
      type: string;
      [key: string]: any
  }
}
const props = defineProps<Props>()

const year = computed(() => {
    const date = props.project.date
    return new Date(date).getFullYear();
})

const formattedURL = computed(() => {
    const url = props.project.site
    return url.replace('http://www.', '').replace('https://www.', '').toUpperCase()
})

useHead({
    title: `${props.project.title} Case Study`,
    meta: [
        {
            name: 'description',
            content: props.project.description
        },
        {
            property: 'og:title',
            content: `${props.project.title} Case Study`    
        },
        {
            property: 'og:description',
            content: props.project.description
        },
        {
            name: 'twitter:title',
            content: `${props.project.title} Case Study`    
        },
        {
            name: 'twitter:description',
            content: props.project.description
        }
    ]
})
</script>

<style>

</style>