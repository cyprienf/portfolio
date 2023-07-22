<template>
  <div v-for="project in projects" :key="project.id">
    {{ project.name }}
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useFetch("/api/projects");
</script>
