export interface Work {
  id: number;
  createdAt: number;
  company: string;
  position: string;
  startDate: number;
  endDate?: number;
  description: string;
}
