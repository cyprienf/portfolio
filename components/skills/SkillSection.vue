<template>
  <div class="skills-section">
    <h2 class="skills-section__title">Skills</h2>
    <div class="skills-section__categories">
      <div
        v-for="category in categories"
        :key="category.id"
        class="skills-section__categories__item"
      >
        <SkillsSkillCategory :category="category" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: categories } = await useFetch('/api/skillCategories');
</script>

<style lang="scss" scoped>
.skills-section {
  margin-top: 1rem;

  &__title {
    margin-bottom: 0.75rem;
  }
}
</style>
