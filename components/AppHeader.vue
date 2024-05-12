<template>
  <div class="app-header">
    <ul class="app-header__categories">
      <NuxtLink :to="{ path: '/', hash: '#about' }"><li>Home</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#works' }"><li>Works</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#skills' }"><li>Skills</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#projects' }"><li>Projects</li></NuxtLink>
      <NuxtLink :to="{ path: '/about' }"><li>About</li></NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-header {
  margin: 0 auto;

  &__categories {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    gap: calc($spacing-medium * 3);

    font-weight: $font-weight-small;
    font-size: calc($font-medium * 0.9);
  }
}
</style>
