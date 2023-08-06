<template>
  <div class="skills-section">
    <h2 class="skills-section__title">
      <div>Skills</div>
    </h2>
    <div class="skills-section__items">
      <div v-for="skill in skills" :key="skill.id">
        <SkillCard :skill="skill" />
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
    margin: 0px 0px 1.45rem;
    padding: 0px;
    color: inherit;
    font-weight: bold;
    font-size: 1.62671rem;
    line-height: 1.1;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}
</style>
