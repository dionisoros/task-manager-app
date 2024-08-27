import { ChangeEvent, FunctionComponent, memo } from 'react';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TaskHeaderProps {
  searchValue: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TaskHeader: FunctionComponent<TaskHeaderProps> = ({ searchValue, onSearchChange }) => {
  const { t: translate } = useTranslation();
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
      <TextField
        fullWidth
        variant="outlined"
        placeholder={translate('app.translation.header.SearchPlaceholder')}
        value={searchValue}
        onChange={onSearchChange}
      />
    </Box>
  );
};

export default memo(TaskHeader);
