<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores/project';
import { useSkillStore } from '@/stores/skill';
import { useWorkStore } from '@/stores/work';

import { storeToRefs } from 'pinia';

useHead({
  title: 'Cyprien Floquet - Portfolio',
});

const projectStore = useProjectStore();
const skillStore = useSkillStore();
const workStore = useWorkStore();

const { projects } = storeToRefs(projectStore);
const { setProjects } = projectStore;

const { skills } = storeToRefs(skillStore);
const { setSkills } = skillStore;

const { works } = storeToRefs(workStore);
const { setWorks } = workStore;

if (projects.value.length === 0) {
  const { data } = await useFetch('/api/projects');
  setProjects(data.value);
}

if (skills.value.length === 0) {
  const { data } = await useFetch('/api/skills');
  setSkills(data.value);
}

if (works.value.length === 0) {
  const { data } = await useFetch('/api/works');
  setWorks(data.value);
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
