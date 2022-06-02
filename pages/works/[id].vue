<template>
  <div class="vh-60">
    <!-- {{ project.fields.title }} -->
    <page-hero
      v-if="project != ''"
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

    return {
      project,
    };
  },
};
</script>
