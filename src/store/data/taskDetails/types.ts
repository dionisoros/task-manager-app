import { Dayjs } from 'dayjs';
import { Task } from '@/store/data/task/types.ts';

export interface TaskDetailsState {
  data: Task | null;
  isLoading: boolean;
}
