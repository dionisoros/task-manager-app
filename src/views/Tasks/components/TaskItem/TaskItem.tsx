import React, { FunctionComponent, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  Grid,
  Chip,
  Button,
  Collapse,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Task, TaskPriority } from '../../../../store/data/task/types.ts';
import react from '@vitejs/plugin-react-swc';

interface TaskItemProps {
  task: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<string, string> = {
  'Ready for Work': 'default',
  'In Progress': 'primary',
  Completed: 'success',
};

const TaskItem: FunctionComponent<TaskItemProps> = ({
  task,
  onEdit,
  onDelete,
}) => {
  return (
    <Grid item xs={12} sm={6} md={3} key={task.id}>
      <Card
        sx={{
          // width: 300, // Fixed width for the card
          // height: 250, // Fixed height for the card
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="8px"
          >
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
              label={task.status}
              color={statusColors[task.status] as any}
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
          <Box
            sx={{
              // whiteSpace: 'normal',
              // overflow: 'hidden',
              // textOverflow: 'ellipsis',
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
                WebkitLineClamp: 3, // Limits the description to 3 lines
                // maxHeight: '4.5em', // Approximately 3 lines of text
                height: '100%'
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
            <Box display="flex" alignItems="center">
              <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                Due Date: {task.dueDate}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontStyle: 'italic',
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                Created: {task.creationDate}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Box sx={{ marginLeft: 'auto' }}>*/}
        {/*    <IconButton color="primary" onClick={() => onEdit(task.id)}>*/}
        {/*      <EditIcon />*/}
        {/*    </IconButton>*/}
        {/*    <IconButton color="secondary" onClick={() => onDelete(task.id)}>*/}
        {/*      <DeleteIcon />*/}
        {/*    </IconButton>*/}
        {/*  </Box>*/}
        {/*</CardActions>*/}
      </Card>
    </Grid>
  );
};

export default TaskItem;

// sx={{
//   animation: `${index === 0 ? 'slideInRight' : ''} 0.5s`,
// }}
