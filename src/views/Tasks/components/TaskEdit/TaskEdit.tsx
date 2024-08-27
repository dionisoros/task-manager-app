import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { TaskFormValues } from './types';
import { FormikProps, useFormik } from 'formik';
import { Task } from '../../../../store/data/task/types.ts';
import * as yup from 'yup';
import TaskForm from '../TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import {
  getIsLoadingTaskDetails,
  getTaskDetails,
} from '@/store/data/taskDetails/selectors.ts';
import Routes from '@/types/router/Routes.ts';
import { fetchTaskById, updateTask } from '@/store/data/taskDetails/thunks.ts';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  priority: yup.string().required('Priority is required'),
  dueDate: yup.date(),
  description: yup.string(),
  status: yup.string(),
});

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskDetails = useSelector(getTaskDetails);
  const isLoading = useSelector(getIsLoadingTaskDetails);

  const handleSubmit = async (values: TaskFormValues) => {
    try {
      await dispatch(updateTask({ id, data: values }));
      // navigate(Routes.taskPage());
    } catch (error) {
      console.log('(comp) Failed to update task:', error);
    } finally {
    }
  };

  const formik: FormikProps<Partial<Task>> = useFormik({
    enableReinitialize: true,
    initialValues: taskDetails || {
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      status: 'Ready for Work',
    },
    validationSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    // Fetch the task data by ID and set initial values
    dispatch(fetchTaskById(id));
  }, [dispatch]);

  const handleBack = () => {
    navigate(Routes.taskPage());
  };

  const handleSave = () => {
    formik.handleSubmit();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        padding: 2,
      }}
    >
      <Card sx={{ padding: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Task
        </Typography>

        <TaskForm formik={formik} onSubmit={() => {}} />

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ marginTop: '8px' }}
        >
          <Grid item>
            <Button onClick={handleBack}>Back to Tasks</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              disabled={!formik.isValid || !formik.dirty} // Disable save button if form is invalid or untouched
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default EditTask;
