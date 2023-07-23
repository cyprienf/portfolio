<template>
  <div class="skill-card">
    <img
      class="skill-card__logo"
      :src="`/assets/icons/skills/${skill.logo}.png`"
    />
    <div class="skill-card__texts">
      <div class="skill-card__texts__name">{{ skill.name }}</div>
      <div class="skill-card__texts__category">{{ category }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skill } from '@prisma/client';

defineProps<{
  category: string;
  skill: Skill;
}>();
</script>

<style lang="scss" scoped>
.skill-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  width: 12rem;

  &__logo {
    width: 35px;
    height: 35px;
  }

  &__texts {
    &__name {
      font-size: 0.95rem;
      font-weight: 500;
    }

    &__category {
      font-size: 0.9rem;
      color: #a4a4a4;
      font-weight: 300;
    }
  }

  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  border-radius: 0.25rem;
}
</style>
