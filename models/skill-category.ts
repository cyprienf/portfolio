import type { Skill } from '@/models/skill';

export interface SkillCategory {
  id: number;
  createdAt: number;
  name: string;
  skills: Skill[];
}
