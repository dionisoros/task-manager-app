import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import gridListStyles from '@/views/TaskView/styles/gridListStyles.ts';

type ListProps = {
  children: ReactNode;
  // customStyles?: CSSProperties;
};

const CardList = ({ children }: ListProps) => {
  return (
    <Grid container spacing={4} columns={12} padding={3} sx={gridListStyles}>
      {children}
    </Grid>
  );
};

export default CardList;
