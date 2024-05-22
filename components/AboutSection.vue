<template>
  <section class="about-section">
    <div class="about-section__picture">
      <img :src="picture" alt="picture" />
    </div>

    <TitleComponent label="👋 Hello there! I'm Cyprien, a software engineer" size="xlarge" />

    <p class="about-section__bio">
      As a fullstack developer I love working with technologies like Vue, Nuxt, Nest.js and Prisma.
      I'm also big fan of librairies like D3.js and Leaflet to make data vizualization dashboards,
      creating graphs and maps. I spend most of my free time watching movies, reading books and
      playing piano.
    </p>

    <div class="about-section__socials">
      <NuxtLink to="https://github.com/CyprienF" target="_blank">
        <UIcon name="i-simple-icons-github" class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://observablehq.com/@cyprienf?tab=profile" target="_blank">
        <UIcon name="i-simple-icons-observable" class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/in/cyprien-floquet-095165109/" target="_blank">
        <UIcon
          name="i-simple-icons-linkedin"
          class="about-section__socials__icon"
          style="color: #0a66c2"
        />
      </NuxtLink>

      <NuxtLink to="https://trakt.tv/users/cyprienf" target="_blank">
        <UIcon
          name="i-simple-icons-trakt"
          class="about-section__socials__icon"
          style="color: #ee161f"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import picture from '@/assets/picture.jpg';
</script>

<style lang="scss" scoped>
.about-section {
  display: flex;
  flex-direction: column;

  &__picture img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-bottom: $spacing-large;
  }

  &__bio {
    font-size: 1rem;
    margin-bottom: $spacing-large;
    line-height: 1.3;
  }

  &__socials {
    display: flex;
    gap: $spacing-medium;

    &__icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
</style>
