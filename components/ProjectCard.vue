<template>
  <div class="project-card">
    <p class="project-card__name">{{ project.name }}</p>
    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__skills">
      <img
        v-for="skill in project.skills"
        :key="skill.id"
        :src="`https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/icons/skills/${skill.logo}.png`"
        :alt="skill.name"
        class="project-card__skills__logo"
      />
    </div>

    <div class="project-card__links">
      <NuxtLink
        class="project-card__links__button"
        :to="project.github?.toString()"
        target="_blank"
        rel="noopener"
      >
        <Button icon="pi pi-github" label="Github" severity="contrast" />
      </NuxtLink>

      <NuxtLink
        class="project-card__links__button"
        :to="project.link?.toString()"
        target="_blank"
        rel="noopener"
      >
        <Button icon="pi pi-link" label="Website" severity="secondary" outlined />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/models/project';

defineProps<{
  project: Project;
}>();
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;

  padding: $spacing-medium;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;

  &__name {
    font-weight: 500;
    margin-bottom: 1em;
  }

  &__description {
    margin-bottom: 0.75em;
    font-size: 0.95em;
  }

  &__skills {
    display: flex;
    gap: 0.3rem;

    margin-bottom: 0.5rem;

    &__logo {
      width: 1.2rem;
    }
  }

  &__links {
    display: flex;
    gap: 10px;

    :deep(.p-button) {
      width: 100%;
      font-size: 0.95rem;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
