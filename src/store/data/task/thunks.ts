import { createAsyncThunk } from '@reduxjs/toolkit';
import get from '@/api/get.ts';
import { mapTasks } from '@/store/data/task/utils/mapTasks.ts';

const BASE_URL = 'http://localhost:4000/tasks';

export interface FetchTasksParams {
  page: number;
  title?: string;
}

const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async ({ page, title }: FetchTasksParams, { rejectWithValue }) => {
    const queryParams = new URLSearchParams({ _page: page.toString() });
    try {
      const url = `${BASE_URL}?${queryParams.toString()}`;
      const data = await get(url, title);
      return mapTasks(data);
    } catch (err) {
      console.log('EROAREEEEE, ', err);
      return rejectWithValue(err);
    }
  },
);

export { fetchTasks };
