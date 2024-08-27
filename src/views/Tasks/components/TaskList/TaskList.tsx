import { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import TaskItem from '../TaskItem';
import { Task } from '../../../../store/data/task/types.ts';
import gridListStyles from '../../styles/gridListStyles.ts';

interface TaskListProps {
  tasks: Task[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: FunctionComponent<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
}) => {
  return (
    <Grid container spacing={4} columns={12} padding={3} sx={gridListStyles}>
      {tasks.map(item => (
        <TaskItem
          task={item}
          onEdit={onEdit}
          onDelete={onDelete}
          key={item.id}
        />
      ))}
    </Grid>
  );
};

export default TaskList;
