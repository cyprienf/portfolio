<template>
  <h1 class="title">{{ label }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  size: 'xlarge' | 'large';
}>();

const fontSize = computed(() => (props.size === 'xlarge' ? '1.75rem' : '1.5rem'));
const fontWeight = computed(() => (props.size === 'xlarge' ? '700' : '600'));
</script>

<style scoped lang="scss">
.title {
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  margin-bottom: $spacing-medium;
}
</style>
