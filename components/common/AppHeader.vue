<template>
  <div class="app-header">
    <ul class="app-header__categories">
      <NuxtLink :to="{ path: '/' }"><li>Home</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#works' }"><li>Works</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#skills' }"><li>Skills</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#projects' }"><li>Projects</li></NuxtLink>
      <NuxtLink :to="{ path: '/dataviz' }"><li>DataViz</li></NuxtLink>
      <NuxtLink :to="{ path: '/about' }"><li>About</li></NuxtLink>
    </ul>

    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<style scoped lang="scss">
.app-header {
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: $spacing-medium;

  &__categories {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    gap: calc($spacing-medium * 3);

    @media (width <= $breakpoint-medium) {
      gap: $spacing-medium;
    }

    font-weight: $font-weight-small;
    font-size: calc($font-medium * 0.9);
  }
}
</style>
