<template>
  <div>
    <section class="py-lg-5 py-4" v-if="loading">
      <div class="container">
        <div class="row">
          <loading-card>
            <template #heading>
              <h2></h2>
            </template>
            <template #paragraph>
              <p></p>
            </template>
          </loading-card>
        </div>
      </div>
    </section>
    <page-hero v-else-if="project != '' && !loading"
      :title="project.fields.title"
      :description="project.fields.description"
    ></page-hero>
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