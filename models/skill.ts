import type { Project } from '@/models/project';
import type { SkillCategory } from '@/models/skill-category';

export interface Skill {
  id: number;
  createdAt: number;
  name: string;
  logo: string;
  order: number;
  enabled: boolean;
  categoryId: number;
  category: SkillCategory;
  projects: Project[];
}
