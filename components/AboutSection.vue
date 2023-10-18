<template>
  <section class="about-section">
    <div class="about-section__picture">
      <img :src="picture" alt="picture" />
    </div>

    <h1 class="about-section__title">
      👋 Hello there! I'm Cyprien a frontend engineer
    </h1>

    <div class="about-section__bio">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facere
      quisquam iste laboriosam eius dicta aspernatur quam laudantium ipsa aut in
      eos nam ratione
    </div>

    <div class="about-section__socials">
      <NuxtLink to="https://github.com/CyprienF" target="_blank">
        <Github class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink
        to="https://observablehq.com/@cyprienf?tab=profile"
        target="_blank"
      >
        <Observablehq class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink
        to="https://www.linkedin.com/in/cyprien-floquet-095165109/"
        target="_blank"
      >
        <Linkedin class="about-section__socials__icon" />
      </NuxtLink>

      <NuxtLink to="https://trakt.tv/users/cyprienf" target="_blank">
        <Trakt class="about-section__socials__icon" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import picture from '@/assets/picture.jpg';

import Github from '@/assets/icons/socials/github.svg';
import Linkedin from '@/assets/icons/socials/linkedin.svg';
import Trakt from '@/assets/icons/socials/trakt.svg';
import Observablehq from '@/assets/icons/socials/observablehq.svg';
</script>

<style lang="scss" scoped>
.about-section {
  display: flex;
  flex-direction: column;

  &__picture img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;

    width: 80%;
  }

  &__bio {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  &__socials {
    display: flex;
    gap: 1.25rem;

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
