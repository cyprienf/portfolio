<template>
  <div class="main">
    <AppHeader />
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
  padding: 1.5rem 10rem 1rem 10rem;

  @media (width <= 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;
}
</style>
