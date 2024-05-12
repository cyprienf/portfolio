<template>
  <div class="about-page">
    <AppHeader />

    <h2 class="about-page__title">About me</h2>

    Here are few things about me: - I'm Cyprien, from Lyon, France - I start playing piano by the
    end of 2020 - I love watching movies and my favorites genre is sci-fy (Infuse, trakt) - Curently
    I work with technologies Vue/Nuxt, Nest.js, Prisma (Trello, Notion, Bear and To Do, Firefox) -
    Development: VSCode, CodeRunner, TablePlus, iTerm, Insomnia, Alfred Macbook pro - D3 / Leaftlet
    - Observable To deploy: Supabase, GCP, Github Actions, Netlify

    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about-page {
  padding: 3rem 6rem 1rem 6rem;

  @media (width <= 768px) {
    padding: 3rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;

  &__title {
    font-weight: 600;
    font-size: $font-large;
    margin-bottom: $spacing-medium;
  }
}
</style>
