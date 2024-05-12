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
const { data: projects } = await useFetch('/api/projects');
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
