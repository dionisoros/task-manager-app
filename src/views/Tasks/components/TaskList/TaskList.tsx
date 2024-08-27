import { FunctionComponent, memo } from 'react';
import TaskItem from '../TaskItem';
import { Task } from '@/store/data/task/types.ts';
import { CardList } from '@/components/Card';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FunctionComponent<TaskListProps> = ({ tasks }) => (
  <CardList>
    {tasks.map(item => (
      <TaskItem task={item} key={item.id} />
    ))}
  </CardList>
);

export default memo(TaskList);
