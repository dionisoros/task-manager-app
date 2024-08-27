import axios from 'axios';
import { Task } from '../store/data/task/types.ts';
import dayjs from 'dayjs';

const post = async (url: string, payload: Partial<Task>): Promise<Task> => {
  const creationDatePayload = {
    ...payload,
    creationDate: dayjs(new Date()).format('MM/DD/YYYY'),
  };
  const { data } = await axios.post<Task>(url, creationDatePayload);

  return data;
};

export default post;
