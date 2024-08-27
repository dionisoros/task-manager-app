import { Task, TaskPriority } from '../../../../store/data/task/types.ts';
import React, { FunctionComponent } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

interface TaskFormProps {
  formik: FormikProps<Partial<Task>>;
  initialData?: Partial<Task>; // Optional initial data for editing
  onSubmit: (data: Partial<Task>) => void;
}

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .length(3, 'Title must be at least 3 characters'),
  priority: yup.string().required('Priority is required'),
  dueDate: yup.date(),
  description: yup.string(),
  status: yup.string(),
});

const TaskForm: FunctionComponent<TaskFormProps> = ({
  formik,
  initialData,
  onSubmit,
}) => {
  const handleDateChange = (date: Date | null) => {
    const formattedDate = dayjs(date).format('MM/DD/YYYY');
    formik.setFieldValue('dueDate', formattedDate);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('title')}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Priority</InputLabel>
        <Select
          name="priority"
          labelId="priority-label"
          label="Priority"
          value={formik.values.priority}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.priority && Boolean(formik.errors.priority)}
        >
          <MenuItem value={TaskPriority.Low}>Low</MenuItem>
          <MenuItem value={TaskPriority.Medium}>Medium</MenuItem>
          <MenuItem value={TaskPriority.High}>High</MenuItem>
          <MenuItem value={TaskPriority.Critical}>Critical</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          fullWidth
          onChange={handleDateChange}
          minDate={dayjs(new Date())}
          value={dayjs(formik.values.dueDate)}
          label="Due Date"
          slotProps={{
            textField: {
              helperText: 'MM/DD/YYYY',
            },
          }}
        />
      </LocalizationProvider>
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={3}
        {...formik.getFieldProps('description')}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          labelId="status-label"
          label="Status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.status && Boolean(formik.errors.status)}
        >
          <MenuItem value="Ready for Work">Ready for Work</MenuItem>
          <MenuItem value="In progress">In progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        {formik.touched.status && formik.errors.status && (
          <div style={{ color: 'red', marginTop: '4px' }}>
            {formik.errors.status}
          </div>
        )}
      </FormControl>
    </form>
  );
};

export default TaskForm;
