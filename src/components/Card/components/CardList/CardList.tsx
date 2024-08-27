import { ReactNode } from 'react';
import gridListStyles from '@/views/Tasks/styles/gridListStyles.ts';
import { Grid } from '@mui/material';

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
