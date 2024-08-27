import axios from 'axios';
import { Task } from '../store/data/task/types.ts';

const patch = async (url: string, payload: Partial<Task>): Promise<Task> => {
  const { data } = await axios.patch<Task>(url, payload);

  return data;
};

export default patch;
