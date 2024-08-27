import { useState, useEffect } from 'react';
import getFiles from '@/api/getFiles.ts';
import { Task } from '@/store/data/task/types.ts';

const useGetTasks = () => {
  const [files, setFiles] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const files = await getFiles();
        setFiles(files);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { files, isLoading, error };
};

export default useGetTasks;
