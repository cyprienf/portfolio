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
.dataviz-card {
  position: relative;
  padding: 20px;
  height: 200px;
  border-radius: 8px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5)),
    v-bind(thumbnailUrl) no-repeat;
  background-size: cover;

  &__infos {
    position: absolute;
    bottom: 25px;

    &__title {
      color: #ffffff;
      font-weight: 600;
      font-size: 1.1rem;
      text-shadow: 2px 2px 4px #000000;
    }

    &__skills {
      margin-top: 10px;
      display: flex;
      gap: 5px;

      &__logo {
        width: 1.2rem;
        filter: drop-shadow(2px 2px 4px #000000);
      }
    }
  }
}
</style>
