import type { Project } from '@prisma/client';

export const useProjectStore = defineStore('project', () => {
  const projects: Ref<Project[]> = ref([]);

  const setProjects = (newProjects: Project[]) => {
    projects.value = newProjects;
  };

  return { projects, setProjects };
});
