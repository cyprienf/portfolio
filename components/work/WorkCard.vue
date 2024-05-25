<template>
  <div class="work-card">
    <p class="work-card__company">{{ work.position }} @{{ work.company }}</p>

    <p class="work-card__dates">
      {{ formatDate(work.startDate) }} - {{ formatDate(work.endDate) }}
    </p>

    <p class="work-card__description">
      {{ work.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '@/models/work';

import { formatDate } from '@/utils/date-utils';

defineProps<{
  work: Work;
}>();
</script>

<style scoped lang="scss">
.work-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-xsmall;

  &__company {
    font-weight: $font-weight-small;
  }

  &__dates {
    font-size: calc($font-medium * 0.95);
    color: $grey;
  }

  &__description {
    font-size: calc($font-medium * 0.95);
    line-height: $line-height-large;
    white-space: pre-wrap;
  }
}
</style>
