// Fetch tasks from the API
import { createAsyncThunk } from '@reduxjs/toolkit';
import get from '@/api/get.ts';
import { Task } from '@/store/data/task/types.ts';
import patch from '@/api/patch.ts';

// Fetch tasks from the API
const fetchTaskById = createAsyncThunk(
  'task/fetchTaskById',
  async (id: string) => {
    const url = `http://localhost:4000/tasks/${id}`;
    const response = await get<Task>(url);
    return response;
  },
);

const updateTask = createAsyncThunk(
  'task/updateTask',
  async ({ id, data }: { id: string; data: Partial<Task> }) => {
    try {
      const response = await patch(`http://localhost:4000/tasks/${id}`, data);
      return response;
    } catch (error) {
      console.log('Failed to update task:', error);
      throw new Error('Failed to update');
    }
  },
);

export { fetchTaskById, updateTask };
