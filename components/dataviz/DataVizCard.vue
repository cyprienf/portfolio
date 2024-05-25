<template>
  <NuxtLink :to="dataViz.link" target="_blank">
    <div class="dataviz-card">
      <div class="dataviz-card__infos">
        <p class="dataviz-card__infos__title">{{ dataViz.name }}</p>

        <div class="dataviz-card__infos__skills">
          <img
            v-for="skill in dataViz.skills"
            :key="skill.id"
            :title="skill.name"
            :src="`https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/icons/skills/${skill.logo}`"
            class="dataviz-card__infos__skills__logo"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { DataViz } from '@/models/dataviz';

const props = defineProps<{
  dataViz: DataViz;
}>();

const thumbnailUrl = ref(
  `url(https://uyumfygdlasbgkivtobp.supabase.co/storage/v1/object/public/portfolio/${props.dataViz.thumbnail})`,
);
</script>

<style scoped lang="scss">
$card-size: 12.5rem;
$logo-size: 1.25rem;

.dataviz-card {
  position: relative;
  padding: $spacing-medium;
  height: $card-size;
  border-radius: $border-radius-large;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5)),
    v-bind(thumbnailUrl) no-repeat;
  background-size: cover;

  &__infos {
    position: absolute;
    bottom: $spacing-small;

    &__title {
      color: $white;
      font-weight: $font-weight-medium;
      font-size: calc($font-medium * 1.1);
      text-shadow: 2px 2px 4px $black;
    }

    &__skills {
      margin-top: $spacing-xsmall;
      display: flex;
      gap: $spacing-xxsmall;

      &__logo {
        width: $logo-size;
        filter: drop-shadow(2px 2px 4px $black);
      }
    }
  }
}
</style>
