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
  padding: $page-padding;

  @media (width <= $breakpoint-medium) {
    padding: $page-padding-medium-devices;
  }

  display: flex;
  flex-direction: column;
  gap: $spacing-xlarge;

  &__projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: $spacing-xsmall;

    &__card {
      flex-grow: 1;
    }
  }
}
</style>
