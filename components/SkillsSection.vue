<template>
  <div id="skills" class="skills-section">
    <h2 class="skills-section__title">
      <div>Skills</div>
    </h2>

    <div class="skills-section__items">
      <div v-for="skill in skills" :key="skill.id">
        <SkillCard v-if="skill.enabled" :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: skills } = await useFetch('/api/skills');
</script>

<style lang="scss" scoped>
.skills-section {
  margin-top: 1rem;

  &__title {
    font-weight: 600;
    font-size: $font-large;
    margin-bottom: $spacing-medium;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
}
</style>
