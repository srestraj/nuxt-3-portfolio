<template>
  <section class="py-lg-5 py-4 footer">
      <div class="container">
        <div class="row">
          <div class="col-12 my-auto">
            <p class="text-center footer-text">get in touch</p>
            <div class="icons-tray">
              <a v-for="brand in brands" :key="brand.icon" :href="brand.link" target="_blank" class="social-link">
                <i :class="'fa-brands fa-' + brand.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<script lang="ts">

export default ({
  setup() {
    const brands = ref([
      {
        icon: "instagram",
        link: "https://instagram.com/srestraj",
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/srestraj'
      },
      {
        icon: 'github',
        link: 'https://github.com/srestraj'
      },
      {
        icon: 'codepen',
        link: 'https://codepen.io/srestraj'
      },
      {
        icon: 'dribbble',
        link: 'https://dribbble.com/srestraj'
      },
      {
        icon: 'linkedin',
        link: 'https://linkedin.com/in/srestraj'
      }
    ])

    return {
      brands
    }
  },
})
</script>