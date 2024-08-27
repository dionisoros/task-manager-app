import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { Divider, Pagination, TablePagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getIsLoadingTasks,
  getItemsCount,
  getPages,
  getTasks,
} from '@/store/data/task/selectors.ts';
import TaskList from './components/TaskList';
import TaskHeader from './components/TaskHeader';
import AddTaskDialog from './components/AddTaskDialog';
import { Task } from '../../store/data/task/types.ts';
import { useNavigate } from 'react-router-dom';
import Routes from '@/types/router/Routes.ts';
import { createTask, fetchTasks } from '@/store/data/task/thunks';
import { updateTask } from '@/store/data/taskDetails/thunks.ts';
import { useNotification } from '@/NotificationContext.tsx';
import TaskFooter from '@/views/Tasks/components/TaskFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
import SkeletonLoading from '@/components/skeleton';

interface Tasks {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
}

const paginationStyles = {
  display: 'flex',
  justifyContent: 'center',
  flex: '0 0 auto',
  width: '100%',
  overflow: 'hidden',
  paddingTop: '1rem',
  paddingBottom: '1rem',
};

const smallScreenStyles = {
  '.MuiToolbar-gutters': {
    paddingLeft: '0',
  },
  '.MuiInputBase-root': {
    marginRight: '4px',
    marginLeft: '0',
  },
  'div.MuiTablePagination-actions': {
    marginLeft: '0',
  },
};

const Tasks: FunctionComponent = () => {
  // const [tasks, setTasks] = useState<Tasks[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const tasks = useSelector(getTasks);
  const items = useSelector(getItemsCount);
  const pages = useSelector(getPages);
  const currentPage = useSelector(getCurrentPage);
  const isLoadingTasks = useSelector(getIsLoadingTasks);
  const showPagination = tasks.length > 0;
  const matches = useMediaQuery('(max-width: 420px)');

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTasks(1));
  }, [dispatch]);

  const handleOnEdit = (taskId: string) => {
    console.log('Edit task:', taskId);
    navigate(Routes.taskEditPage(taskId));
  };

  const handleOnDelete = (taskId: string) => {
    console.log('Delete task:', taskId);
  };

  const handleOnOpen = () => setDialogOpen(true);

  const handleOnSearch = () => {
    console.log('Search tasks');
  };

  const handleCloseDialog = () => setDialogOpen(false);

  const handleSubmit = async (values: Partial<Task>) => {
    try {
      await dispatch(createTask(values));
    } catch (error) {
      console.error('Failed to create task:', error);
    } finally {
      handleCloseDialog();
      // dispatch(fetchTasks());
    }
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    console.log('value: ', value);
    setPage(value);
    dispatch(fetchTasks(value));
  };

  return (
    <>
      <TaskHeader onAdd={handleOnOpen} onSearchChange={handleOnSearch} />
      <Divider />
      {isLoadingTasks ? (
        <SkeletonLoading />
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={handleOnEdit}
          onDelete={handleOnDelete}
        />
      )}
      <Pagination
        count={pages}
        page={page}
        onChange={handlePageChange}
        style={paginationStyles}s
      />
      {/*{showPagination && <TaskFooter />}*/}
      <AddTaskDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Tasks;
