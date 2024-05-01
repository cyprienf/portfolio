<template>
  <div class="projects-section">
    <h2 class="projects-section__title">Projects</h2>

    <div class="projects-section__items">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useFetch('/api/projects');
</script>

<style lang="scss" scoped>
.projects-section {
  &__title {
    font-weight: 600;
    font-size: $font-large;
    margin-bottom: $spacing-medium;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: $spacing-xsmall;
  }
}
</style>
