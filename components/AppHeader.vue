<template>
  <div class="app-header">
    <ul class="app-header__categories">
      <NuxtLink :to="{ path: '/', hash: '#about' }"><li>Home</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#works' }"><li>Works</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#skills' }"><li>Skills</li></NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#projects' }"><li>Projects</li></NuxtLink>
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
    justify-content: center;

    padding: 0.4rem 8rem;

    gap: 45px;

    @media (width <= 768px) {
      padding: 0.4rem 1rem;
    }

    font-weight: 500;
    font-size: 1rem;
    border: 1px solid #e2e8f0;

    border-radius: 1rem;
  }
}
</style>
