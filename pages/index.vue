<template>
  <div class="main">
    <AboutSection />
    <WorksSection />
    <SkillsSection />
    <ProjectsSection />
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
  padding: 3rem 6rem 1rem 6rem;

  @media (width <= 768px) {
    padding: 3rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;
}
</style>
