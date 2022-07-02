<template>
  <section class="py-lg-5 py-4">
    <div class="container">
      <div class="row" v-if="loading">
        <div class="col-md-6 px-lg-4 mb-4">
          <loading-card>
            <template #image>
              <div class="img"></div>
            </template>
          </loading-card>
        </div>
        <div class="col-md-6 px-lg-4 mb-4">
          <loading-card>
            <template #image>
              <div class="img"></div>
            </template>
          </loading-card>
        </div>
        <div class="col-md-6 px-lg-4 mb-4">
          <loading-card>
            <template #image>
              <div class="img"></div>
            </template>
          </loading-card>
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-md-6 px-lg-4 mb-4"
          v-for="project in projects"
          :key="project.fields.slug"
        >
          
          <div class="thumb">
            <img
              :src="project.fields.image.fields.file.url"
              :alt="project.fields.title"
              class="img-fluid"
            />
            <div class="image-text">
              <h2 class="project-title">{{ project.fields.title }}</h2>
              <p class="project-description">
                {{ project.fields.description }}
              </p>
              <nuxt-link
                :to="'/works/' + project.fields.slug"
                v-if="project.fields.caseStudy"
                class="project-link"
                ><span>Case Study <i class="fas fa-arrow-right"></i></span
              ></nuxt-link>
            </div>
            <div class="site-link">
              <a
                :href="project.fields.site"
                target="_blank"
                title="Go to website"
                class="project-link"
                ><i class="fas fa-external-link-alt"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="row py-5 mx-auto">
          <div class="col-12 text-center">
            <nuxt-link
              :to="{ name: 'works' }"
              v-if="$route.path == '/' && projects.length != 0"
              class="project-link"
            >
              <span class="view-all"
                >View all <i class="fas fa-arrow-right"></i
              ></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "~/store/projects";
const sliceValue = ref(4);
const store = useProjectsStore();
store.getProjects();

const projectItems = computed(() => {
  return store.$state.projectList;
});
const route = useRoute();

const projects = computed(() => {
  if (route.path == "/") {
    return projectItems.value.slice(0, sliceValue.value);
  } else {
    return projectItems.value;
  }
});

const loading = computed(() => {
  return store.$state.projectsLoading;
})
</script>
