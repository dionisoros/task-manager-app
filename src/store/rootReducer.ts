import { combineReducers } from 'redux';
import configSlice from './config/configSlice';
import taskSlice from './data/task/taskSlice';
import taskDetailsSlice from './data/taskDetails/taskDetailsSlice';

const rootReducer = combineReducers({
  config: configSlice,
  data: combineReducers({
    tasks: taskSlice,
    taskDetails: taskDetailsSlice,
  }),
  // ui
});

export default rootReducer;
