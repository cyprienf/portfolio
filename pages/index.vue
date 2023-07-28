<template>
  <div class="main">
    <AboutSection />
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
}
</style>
