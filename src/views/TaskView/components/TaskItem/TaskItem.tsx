import { FunctionComponent, useMemo } from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Task } from '@/store/data/task/types.ts';
import { useTranslation } from 'react-i18next';
import { getTranslatedStatus } from '../../utils/mapStatusToTranslations';
import { statusColors } from '../../utils/mapStatusToColors';

interface TaskItemProps {
  task: Task;
}

const TaskItem: FunctionComponent<TaskItemProps> = ({ task }) => {
  const { t: translate } = useTranslation();

  const translatedStatus = useMemo(() => getTranslatedStatus(translate), [translate]);

  return (
    <Grid item xs={12} sm={6} md={3} key={task.id}>
      <Card
        tabIndex={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" gap="8px">
            <Typography
              variant="h6"
              component="div"
              title={task.title}
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {task.title}
            </Typography>
            <Chip
              label={translatedStatus[task.status]}
              color={statusColors[task.status]}
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
          <Box
            sx={{
              height: '100px',
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              title={task.description}
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                height: '100%',
              }}
            >
              {task.description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Box display="flex" alignItems="center" gap="4px">
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {translate('app.translation.task.DueDate')}: {task.dueDate}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="4px">
              <AccessTimeIcon fontSize="small" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontStyle: 'italic',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {translate('app.translation.task.Created')}: {task.creationDate}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TaskItem;
