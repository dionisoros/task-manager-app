import axios from 'axios';

const get = async <T>(url: string): Promise<T> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const { data } = await axios.get<T>(url);

  return data;
};

export default get;
