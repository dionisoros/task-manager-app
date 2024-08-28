import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { fetchTasks } from '@/store/data/task/thunks.ts';
import { debounce } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

const useGetTasks = (currentPage: number) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    dispatch(fetchTasks({ page: currentPage }));
  }, [dispatch]);

  const debouncedFn = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(fetchTasks({ page: currentPage, title: value }));
      }, 300),
    [dispatch],
  );

  const handleOnSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      debouncedFn(value);
    },
    [debouncedFn],
  );

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    console.log('page', page);
    dispatch(fetchTasks({ page }));
  }

  return {
    searchValue,
    handleOnSearch,
    handlePageChange,
  };
};

export default useGetTasks;
