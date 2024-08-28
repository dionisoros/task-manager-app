import React, { ChangeEvent, FunctionComponent, memo } from 'react';
import { TextField, Box, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TaskHeaderProps {
  searchValue: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TaskHeader: FunctionComponent<TaskHeaderProps> = ({ searchValue, onSearchChange }) => {
  const { t: translate } = useTranslation();
  const matches = useMediaQuery('(min-width: 720px)');
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        gap: '1rem',
      }}
    >
      <Typography
        variant="h5"
        title={translate('app.translation.title.TaskList')}
        sx={{
          // flex: '0 0 auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {translate('app.translation.title.TaskList')}
      </Typography>
      <TextField
        sx={{ ...(matches ? { width: '35%' } : { flex: '1 1 auto' }) }}
        label={translate('app.translation.header.SearchPlaceholder')}
        variant="outlined"
        placeholder={translate('app.translation.header.SearchPlaceholder')}
        value={searchValue}
        onChange={onSearchChange}
      />
    </Box>
  );
};

export default memo(TaskHeader);
