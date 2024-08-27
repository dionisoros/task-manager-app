import { Dayjs } from 'dayjs';

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export interface Task {
  id: string;
  title: string;
  priority: string;
  status: string;
  dueDate: string;
  creationDate: string;
  description?: string;
}

export interface TaskResponse {
  data: Task[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
}

export interface TaskState {
  data: TaskResponse;
  isLoading: boolean;
}
