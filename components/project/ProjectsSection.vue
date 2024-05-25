<template>
  <div id="projects" class="projects-section">
    <TitleComponent label="Projects" size="large" />

    <div class="projects-section__items">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores/project';

import { storeToRefs } from 'pinia';

const projectStore = useProjectStore();

const { projects } = storeToRefs(projectStore);
</script>

<style lang="scss" scoped>
.projects-section {
  &__items {
    display: flex;
    flex-direction: column;
    gap: $spacing-xsmall;
  }
}
</style>
