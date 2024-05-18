import type { DataViz } from '@/models/dataviz';

export const useDataVizStore = defineStore('dataviz', () => {
  const dataVizProjects: Ref<DataViz[]> = ref([]);

  const setDataVizProjects = (newDataVizProjects: DataViz[]) => {
    dataVizProjects.value = newDataVizProjects;
  };

  return { dataVizProjects, setDataVizProjects };
});
