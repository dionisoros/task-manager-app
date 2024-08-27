import React, { FunctionComponent } from 'react';
import { IconButton, TextField, Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface TaskHeaderProps {
  onAdd: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TaskHeader: FunctionComponent<TaskHeaderProps> = ({
  onAdd,
  onSearchChange,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'background.paper',
        gap: 1,
      }}
    >
      <IconButton
        color="primary"
        onClick={onAdd}
        sx={{
          borderRadius: '50%',
          padding: 2,
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search tasks..."
        value=""
        onChange={onSearchChange}
      />
    </Box>
  );
};

export default TaskHeader;
