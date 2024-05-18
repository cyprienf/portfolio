<template>
  <div class="dataviz-page">
    <AppHeader />

    <TitleComponent label="📊 Data Visualization" size="xlarge" />

    <p>Work in progress</p>

    <div class="dataviz-page__projects">
      <DataVizCard
        v-for="dataViz in dataVizProjects"
        :key="dataViz.id"
        class="dataviz-page__projects__card"
        :data-viz="dataViz"
      />
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useDataVizStore } from '@/stores/dataviz';

import { storeToRefs } from 'pinia';

const dataVizStore = useDataVizStore();

const { dataVizProjects } = storeToRefs(dataVizStore);
</script>

<style scoped lang="scss">
.dataviz-page {
  padding: 1.5rem 10rem 1rem 10rem;

  @media (width <= 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xxlarge;

  &__projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    &__card {
      flex-grow: 1;
    }
  }
}
</style>
