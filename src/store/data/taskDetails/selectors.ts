import { State } from '../../types.ts';
import { Task } from './types.ts';

export const getTaskDetails = (state: State): Task | null =>
  state.data.taskDetails.data;

export const getIsLoadingTaskDetails = (state: State): boolean =>
  state.data.taskDetails.isLoading;
