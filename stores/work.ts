import type { Work } from '@/models/work';

export const useWorkStore = defineStore('work', () => {
  const works: Ref<Work[]> = ref([]);

  const setWorks = (newWorks: Work[]) => {
    works.value = newWorks;
  };

  return { works, setWorks };
});
