import React, { FunctionComponent } from 'react';
import { TablePagination } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { getPagination } from '../../../../store/products/selectors';
import { setPagination } from '../../../../store/products/productsSlice';
import paginationStyles from './styles/paginationStyles';
import smallScreenStyles from './styles/smallScreenStyles';

const TaskFooter: FunctionComponent = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width: 420px)');
  // const pagination = useSelector(getPagination);
  const { totalCount, pageNumber, totalPages, pageSize } = pagination;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    // dispatch(
    // setPagination({
    //   pageSize: pagination.pageSize,
    //   pageNumber: newPage,
    // })
    // );
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    // dispatch(
    // setPagination({
    //   pageSize: Number(value),
    //   pageNumber: 0,
    // })
    // );
  };

  return (
    <TablePagination
      component="div"
      color="primary"
      count={totalCount}
      page={pageNumber}
      onPageChange={handleChangePage}
      rowsPerPageOptions={[5, 10, 15]}
      rowsPerPage={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      nextIconButtonProps={{
        disabled: pageNumber === totalPages - 1,
      }}
      backIconButtonProps={{ disabled: pageNumber === 0 }}
      style={paginationStyles}
      sx={{ ...(matches && smallScreenStyles) }}
    />
  );
};

export default TaskFooter;
