import { ConfigState } from './config/types.ts';
import { TaskState } from './data/task/types.ts';
import { TaskDetailsState } from '@/store/data/taskDetails/types.ts';

export interface State {
  config: ConfigState;
  data: {
    tasks: TaskState;
    taskDetails: TaskDetailsState;
  };
  // ui: FishProductUiState
}
