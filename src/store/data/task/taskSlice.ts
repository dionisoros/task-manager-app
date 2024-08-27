import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskPayload, TaskState } from './types';
import { fetchTasks } from './thunks';

const initialState: TaskState = {
  list: {
    data: [],
    count: 10,
    currentPage: 1,
    totalPages: 0,
    firstPage: 1,
    lastPage: 0,
    nextPage: 0,
    prevPage: 0,
  },
  isLoading: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        // console.log('pending: ');
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskPayload>) => {
        // console.log('fullfilled: ', action.payload);
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        console.log('error: ', action.error.message);
        state.isLoading = false;
        // state.status = 'failed';
        // state.error = action.error.message || 'Failed to fetch tasks';
      });
  },
});

export default taskSlice.reducer;
