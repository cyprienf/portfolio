<template>
  <div class="works-section">
    <TitleComponent label="Education & Work experiences" size="large" />

    <div class="works-section__items">
      <WorkCard v-for="work in works" :key="work.id" :work="work" />
    </div>

    <div class="works-section__cv">
      <UButton
        color="black"
        variant="solid"
        icon="i-heroicons-cloud-arrow-down-solid"
        size="md"
        to="https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/cv.pdf"
        target="_blank"
        >Curriculum vitae</UButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWorkStore } from '@/stores/work';

import { storeToRefs } from 'pinia';

const workStore = useWorkStore();

const { works } = storeToRefs(workStore);
</script>

<style lang="scss" scoped>
.works-section {
  &__items {
    display: flex;
    flex-direction: column;
    gap: $spacing-large;
  }

  &__cv {
    margin-top: $spacing-medium;
  }
}
</style>
