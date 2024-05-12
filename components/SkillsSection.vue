<template>
  <div id="skills" class="skills-section">
    <TitleComponent label="Skills" size="large" />

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

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
}
</style>
