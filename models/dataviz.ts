import type { Skill } from '@/models/skill';

export interface DataViz {
  id: number;
  createdAt: number;
  name: string;
  thumbnail?: string;
  github?: string;
  link?: string;
  description?: string;
  skills: Skill[];
}
