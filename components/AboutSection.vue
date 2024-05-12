<template>
  <section id="about" class="about-section">
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
        <Github class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://observablehq.com/@cyprienf?tab=profile" target="_blank">
        <Observablehq class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/in/cyprien-floquet-095165109/" target="_blank">
        <Linkedin class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://trakt.tv/users/cyprienf" target="_blank">
        <Trakt class="about-section__socials__icon" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Github from '@/assets/icons/socials/github.svg';
import Linkedin from '@/assets/icons/socials/linkedin.svg';
import Observablehq from '@/assets/icons/socials/observablehq.svg';
import Trakt from '@/assets/icons/socials/trakt.svg';
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
    font-size: 1.05rem;
    margin-bottom: $spacing-large;
    line-height: 1.25;
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
