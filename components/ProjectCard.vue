<template>
  <div class="project-card">
    <div class="project-card__title">{{ project.title }}</div>
    <div class="project-card__description">
      {{ project.description }}
    </div>

    <div class="project-card__links">
      <div class="project-card__links__item">
        <i><GithubIcon /></i>
        <NuxtLink :to="project.github?.toString()" target="_blank">
          {{ project.github }}
        </NuxtLink>
      </div>
      <div class="project-card__links__item">
        <i><LinkIcon /></i>
        <NuxtLink :to="project.link?.toString()" target="_blank">
          {{ project.link }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '@prisma/client';

import GithubIcon from '@/assets/icons/projects/GithubIcon.vue';
import LinkIcon from '@/assets/icons/projects/LinkIcon.vue';

defineProps<{
  project: Project;
}>();
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  border-radius: 0.25rem;

  &__title {
    font-weight: 700;
    margin-bottom: 1em;
  }

  &__description {
    margin-bottom: 1em;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #a4a4a4;

    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 300;
      font-size: 0.95em;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
