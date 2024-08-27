import { State } from '../../types.ts';
import { Task } from './types.ts';

export const getTasks = (state: State): Task[] => state.data.tasks.data.data;
export const getIsLoadingTasks = (state: State): boolean =>
  state.data.tasks.isLoading;

export const getItemsCount = (state: State): number =>
  state.data.tasks.data.items;
export const getPages = (state: State): number => state.data.tasks.data.pages;
export const getCurrentPage = (state: State): number => {
  const last = state.data.tasks.data.last;
  const prev = state.data.tasks.data.prev;
};
