<template>
  <div class="skill-category">
    <div class="skill-category__items">
      <template v-for="skill in skills" :key="skill.id">
        <SkillsSkillCard :category="category.name" :skill="skill" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SkillCategory } from '@prisma/client';

const props = defineProps<{
  category: SkillCategory;
}>();

const { data: skills } = await useFetch(
  `/api/skills?category=${props.category.id}`
);
</script>

<style lang="scss" scoped>
.skill-category {
  margin-left: 0.5rem;
  margin-bottom: 1.5rem;

  &__name {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  &__items {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}
</style>
