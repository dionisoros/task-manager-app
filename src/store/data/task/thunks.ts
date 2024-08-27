// Fetch tasks from the API
import { createAsyncThunk } from '@reduxjs/toolkit';
import get from '@/api/get.ts';
import { Task, TaskResponse } from '@/store/data/task/types.ts';
import post from '@/api/post.ts';

const fetchTasks = createAsyncThunk('task/fetchTasks', async (page: number) => {
  const url = `http://localhost:4000/tasks?_page=${page}`;
  const response = await get<TaskResponse>(url);
  console.log('response: ', response);
  return response;
});

const createTask = createAsyncThunk(
  'task/createTask',
  async (payload: Partial<Task>) => {
    const url = 'http://localhost:4000/tasks';
    const response = await post(url, payload);
    return response;
  },
);

export { fetchTasks, createTask };
