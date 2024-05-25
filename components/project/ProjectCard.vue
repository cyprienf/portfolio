<template>
  <div class="project-card">
    <p class="project-card__name">{{ project.name }}</p>
    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__skills">
      <img
        v-for="skill in project.skills"
        :key="skill.id"
        :src="`https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/skills/${skill.logo}`"
        :alt="skill.name"
        class="project-card__skills__logo"
      />
    </div>

    <div class="project-card__links">
      <div class="project-card__links__button">
        <UButton
          color="black"
          variant="solid"
          icon="i-simple-icons-github"
          :to="project.github?.toString()"
          target="_blank"
          block
          >Github</UButton
        >
      </div>

      <div class="project-card__links__button">
        <UButton
          color="gray"
          variant="solid"
          icon="i-heroicons-link-16-solid"
          :to="project.link?.toString()"
          target="_blank"
          block
          >Link</UButton
        >
      </div>
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
$logo-size: 1.2rem;

.project-card {
  display: flex;
  flex-direction: column;

  padding: $spacing-medium;
  border: 1px solid $border;
  border-radius: $border-radius-medium;

  &__name {
    font-weight: $font-weight-small;
    margin-bottom: $spacing-medium;
  }

  &__description {
    margin-bottom: $spacing-small;
    font-size: calc($font-medium * 0.95);
  }

  &__skills {
    display: flex;
    gap: $spacing-xxsmall;

    margin-bottom: $spacing-medium;

    &__logo {
      width: $logo-size;
    }
  }

  &__links {
    display: flex;
    gap: $spacing-small;

    &__button {
      width: 100%;
    }
  }
}
</style>
