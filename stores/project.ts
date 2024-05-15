import type { Project } from '@/models/project';

export const useProjectStore = defineStore('project', () => {
  const projects: Ref<Project[]> = ref([]);

  const setProjects = (newProjects: Project[]) => {
    projects.value = newProjects;
  };

  return { projects, setProjects };
});
