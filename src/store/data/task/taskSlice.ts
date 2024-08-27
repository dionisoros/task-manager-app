import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from './types';
import { createTask, fetchTasks } from './thunks';

const initialState: TaskState = {
  data: {
    data: [],
    first: 0,
    items: 0,
    last: 0,
    next: 0,
    pages: 0,
    prev: 0,
  },
  isLoading: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // setTasks: (state: TaskState, action: PayloadAction<Task[]>) => {
    //   return { ...state, data: action.payload };
    // },
  },
  extraReducers: builder => {
    // Handle fetch tasks
    builder
      .addCase(fetchTasks.pending, state => {
        console.log('pending: ');
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        console.log('fullfilled: ', action.payload);
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        console.log('error: ', action.error.message);
        // state.status = 'failed';
        // state.error = action.error.message || 'Failed to fetch tasks';
      });

    builder
      .addCase(createTask.pending, state => {
        console.log('pending: ');
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<Task[]>) => {
        console.log('fullfilled: ', action.payload);
        state.isLoading = false;
        // state.data = action.payload;
      })
      .addCase(createTask.rejected, (state, action) => {
        console.log('error: ', action.error.message);
        // state.status = 'failed';
        // state.error = action.error.message || 'Failed to fetch tasks';
      });
  },
});

export const { setTasks, setIsLoadingTasks, setTaskDetails } =
  taskSlice.actions;

export default taskSlice.reducer;
