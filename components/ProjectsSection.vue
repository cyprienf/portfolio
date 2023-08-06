<template>
  <div class="projects-section">
    <h2 class="projects-section__title">
      <div>Projects</div>
    </h2>

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
  margin-top: 1rem;

  &__title {
    margin: 0px 0px 1.45rem;
    padding: 0px;
    color: inherit;
    font-weight: bold;
    font-size: 1.62671rem;
    line-height: 1.1;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
