<template>
  <div class="dataviz-card"></div>
</template>

<script setup lang="ts">
import type { DataViz } from '@/models/dataviz';

defineProps<{
  dataViz: DataViz;
}>();
</script>

<style scoped lang="scss">
.dataviz-card {
}
</style>
