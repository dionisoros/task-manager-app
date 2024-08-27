import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
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
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      console.log('Search tasks: ', value);
      setSearchValue(value);
      debouncedFn(value);
    },
    [debouncedFn],
  );

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => dispatch(fetchTasks({ page }));

  return {
    searchValue,
    handleOnSearch,
    handlePageChange,
  };
};

export default useGetTasks;
