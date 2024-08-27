import axios from 'axios';
import { TaskItemResponse, TaskResponse } from '@/store/data/task/types.ts';

// Helper function to simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const get = async (url: string, titleValue: string | undefined): Promise<TaskResponse> => {
  await delay(1000);

  const { data } = await axios.get<TaskResponse>(url);

  if (!titleValue) return data;

  const filteredData = data.data.filter((task: TaskItemResponse) =>
    task.title.toLowerCase().includes(titleValue.toLowerCase()),
  );

  return {
    ...data,
    data: filteredData,
  };
};

export default get;
