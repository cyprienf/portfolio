import type { Skill } from '@/models/skill';

export interface Project {
  id: number;
  createdAt: number;
  name: string;
  image: string;
  github?: string;
  link?: string;
  description: string;
  skills: Skill[];
}
