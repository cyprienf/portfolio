<template>
  <div id="works" class="works-section">
    <TitleComponent label="Education & Work experiences" size="large" />

    <div class="works-section__items">
      <div v-for="work in works" :key="work.id" class="works-section__items__details">
        <p class="works-section__items__details__company">
          {{ work.position }} @{{ work.company }}
        </p>

        <p class="works-section__items__details__dates">
          {{ formatDate(work.startDate) }} - {{ formatDate(work.endDate) }}
        </p>

        <p class="works-section__items__details__description">
          {{ work.description }}
        </p>
      </div>
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

const formatDate = (date: string | null): string => {
  if (!date) {
    return 'Today';
  }

  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
};
</script>

<style lang="scss" scoped>
.works-section {
  &__items {
    display: flex;
    flex-direction: column;
    gap: $spacing-large;

    &__details {
      display: flex;
      flex-direction: column;
      gap: $spacing-xsmall;

      &__company {
        font-weight: 500;
      }

      &__dates {
        font-size: 0.95em;
        color: #a4a4a4;
      }

      &__description {
        font-size: 0.95em;
        line-height: 1.25;
        white-space: pre-wrap;
      }
    }
  }

  &__cv {
    margin-top: 20px;
  }
}
</style>
