<template>
  <div class="works-section">
    <h2 class="works-section__title">Works</h2>
    <div class="works-section__items">
      <div
        v-for="work in works"
        :key="work.id"
        class="works-section__items__details"
      >
        <div class="works-section__items__details__company">
          {{ work.position }} @ {{ work.company }}
        </div>

        <div class="works-section__items__details__dates">
          {{ formatDate(work.startDate) }} - {{ formatDate(work.endDate) }}
        </div>

        <div class="works-section__items__details__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est,
          alias libero accusantium autem doloribus quaerat magnam, nesciunt,
          exercitationem aspernatur placeat eius nemo similique quo ratione quia
          hic at impedit?
        </div>
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
  margin-top: 1rem;

  &__title {
    margin-bottom: 0.75rem;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 0.5rem;

    &__details {
      display: flex;
      flex-direction: column;

      &__company {
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      &__dates {
        margin-bottom: 0.5rem;
        color: #a4a4a4;
      }
    }
  }
}
</style>
