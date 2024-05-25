<template>
  <div class="skill-card">
    <img
      class="skill-card__logo"
      :src="`https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/skills/${skill.logo}`"
    />
    <div class="skill-card__texts">
      <div class="skill-card__texts__name">{{ skill.name }}</div>
      <div class="skill-card__texts__category">{{ skill.category.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '@/models/skill';

defineProps<{
  skill: Skill;
}>();
</script>

<style lang="scss" scoped>
$card-size: 12.5rem;
$card-size-medium-devices: 9.25rem;
$logo-size: 1.875rem;

.skill-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: $spacing-medium;

  min-width: $card-size;
  max-width: $card-size;

  @media (width <= $breakpoint-medium) {
    min-width: $card-size-medium-devices;
    max-width: $card-size-medium-devices;
  }

  &__logo {
    width: $logo-size;
    height: $logo-size;
  }

  &__texts {
    &__name {
      font-size: calc($font-medium * 0.95);
      font-weight: $font-weight-small;
      margin-bottom: calc($spacing-medium * 0.3);
    }

    &__category {
      font-size: calc($font-medium * 0.9);
      color: $grey;
    }
  }

  border: 1px solid $border;
  padding: $spacing-small;
  border-radius: $border-radius-medium;
}
</style>
