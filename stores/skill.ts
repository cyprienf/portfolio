import type { Skill } from '@prisma/client';

export const useSkillStore = defineStore('skills', () => {
  const skills: Ref<Skill[]> = ref([]);

  const setSkills = (newSkills: Skill[]) => {
    skills.value = newSkills;
  };

  return { skills, setSkills };
});
