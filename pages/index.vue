<template>
  <div class="main">
    <AboutSection />
    <WorksSection />
    <ProjectsSection />
    <SkillsSection />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Cyprien Floquet - Portfolio',
});
</script>

<style lang="scss" scoped>
.main {
  margin: 0rem 8rem;
  background-color: $white;

  padding: 4rem 2rem 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
