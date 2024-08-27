import { FunctionComponent, memo } from 'react';
import TaskItem from '../TaskItem';
import { Task } from '@/store/data/task/types.ts';
import { CardList } from '@/components/Card';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FunctionComponent<TaskListProps> = ({ tasks }) => {
  const { t: translate } = useTranslation();

  if (!tasks.length) {
    return (
      <Box padding="2rem">
        <Typography>{translate('app.translation.tasks.NoResultsFound')}</Typography>
      </Box>
    );
  }
  return (
    <CardList>
      {tasks.map(item => (
        <TaskItem task={item} key={item.id} />
      ))}
    </CardList>
  );
};

export default memo(TaskList);
