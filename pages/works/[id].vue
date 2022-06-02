<template>
  <div>
    <loading-placeholder :loading="loading"></loading-placeholder>
    
    <div v-if="project != '' && !loading">
      <page-hero
        :title="project.fields.title"
        :description="project.fields.description"
      ></page-hero>
      <section class="py-lg-5 py-4">
        <div class="container">
          <project-description :project="project.fields"></project-description>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { useProjectsStore } from "~/store/projects";
export default {
  setup() {
    const store = useProjectsStore();
    const route = useRoute();
    store.getSingleProject(route.params.id);

    const project = computed(() => {
      return store.$state.selectedProject;
    });

    const loading = computed(() => {
      return store.$state.projectLoading;
    });

    return {
      project,
      loading
    };
  },
};
</script>
<style scoped>
@media(min-width: 768px) {
    .card-wrapper {
        max-width: 80%;
        margin: 0 auto;
    }
    h2 {
        max-width: 50%;
    }

}
</style>