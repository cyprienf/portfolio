<template>
  <div class="main">
    <AboutSection />
    <hr />
    <SkillsSkillSection />
    <hr />
    <WorksSection />
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
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  padding: 4rem 2rem 2rem 2rem;
}
</style>
