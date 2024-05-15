<template>
  <div class="skill-card">
    <img
      class="skill-card__logo"
      :src="`https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/icons/skills/${skill.logo}.png`"
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
.skill-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  min-width: 200px;
  max-width: 200px;

  @media (width <= 768px) {
    min-width: 150px;
    max-width: 150px;
  }

  &__logo {
    width: 30px;
    height: 30px;
  }

  &__texts {
    &__name {
      font-size: 0.95rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
    }

    &__category {
      font-size: 0.9rem;
      color: #a4a4a4;
    }
  }

  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  border-radius: 0.25rem;
}
</style>
