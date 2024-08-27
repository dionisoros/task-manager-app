import { createAction } from '@reduxjs/toolkit';
import { Task } from './types.ts';
import { NavigateFunction } from 'react-router-dom';

export const LOAD_TASKS = 'LOAD_TASKS';
export const loadTasks = createAction(LOAD_TASKS);

export const CREATE_TASK = 'CREATE_TASK';
export const createTask = createAction<Partial<Task>>(CREATE_TASK);
export type CreateTaskAction = ReturnType<typeof createTask>;

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTask = createAction<{
  data: Partial<Task>;
  id: string;
  navigate: NavigateFunction;
}>(UPDATE_TASK);
export type UpdateTaskAction = ReturnType<typeof createTask>;

export const LOAD_TASK_DETAILS = 'LOAD_TASK_DETAILS';
export const loadTaskDetails = createAction<{ taskId: string }>(
  LOAD_TASK_DETAILS,
);
export type LoadTaskDetailsAction = ReturnType<typeof loadTaskDetails>;
