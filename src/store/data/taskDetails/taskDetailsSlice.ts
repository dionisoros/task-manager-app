import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskDetailsState } from './types';
import { fetchTaskById, updateTask } from './thunks';

const initialState: TaskDetailsState = {
  data: null,
  isLoading: false,
};

const taskDetailsSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Handle fetch tasks
    builder
      .addCase(fetchTaskById.pending, state => {
        console.log('pending: ');
        state.isLoading = true;
      })
      .addCase(
        fetchTaskById.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchTaskById.rejected, (state, action) => {
        console.log('error: ', action.error.message);
        // state.status = 'failed';
        // state.error = action.error.message || 'Failed to fetch tasks';
      });

    // Handle update task
    builder
      .addCase(updateTask.pending, state => {
        console.log('pending: ');
        // state.status = 'loading';
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        console.log('fulfilled: ');
        // state.status = 'succeeded';
        // const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        // if (index !== -1) {
        //   state.tasks[index] = action.payload;
        // }
        state.data = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        console.log('rejected: ');
        // state.status = 'failed';
        // state.error = action.error.message || 'Failed to update task';
      });
  },
});

export const { setTasks, setIsLoadingTasks, setTaskDetails } =
  taskDetailsSlice.actions;

export default taskDetailsSlice.reducer;
