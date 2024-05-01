<template>
  <div class="works-section">
    <h2 class="works-section__title">
      <div>Work experiences</div>
    </h2>

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
  </div>
</template>

<script lang="ts" setup>
const { data: works } = await useFetch('/api/works');

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
  &__title {
    font-weight: 600;
    font-size: $font-large;
    margin-bottom: $spacing-medium;
  }

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
}
</style>
