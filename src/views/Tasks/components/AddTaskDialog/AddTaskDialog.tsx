import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import TaskForm from '../TaskForm';
import { Task } from '../../../../store/data/task/types.ts';

// Define validation schema
const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  priority: yup.string().required('Priority is required'),
  dueDate: yup.date(),
  description: yup.string(),
  status: yup
    .string()
    .oneOf(['Ready for Work', 'In progress', 'Completed'], 'Invalid status'),
});

const AddTaskDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
}> = ({ open, onClose, onSubmit }) => {
  // const [dueDate, setDueDate] = useState<Dayjs>(dayjs());

  const formik: FormikProps<Partial<Task>> = useFormik({
    initialValues: {
      title: '',
      priority: '',
      dueDate: '',
      description: '',
      status: 'Ready for Work',
    } as Partial<Task>,
    validationSchema,
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm(); // Reset form after submission
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const handleClose = useCallback(
    (ev, reason: string) => {
      if (reason === 'backdropClick' && formik.dirty) {
        // prevent closing dialog when clicking outside when the form is dirty
        return;
      }
      onClose();
      formik.resetForm();
    },
    [onClose, formik],
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <TaskForm formik={formik} onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => formik.handleSubmit()}
          color="primary"
          variant="contained"
          disabled={!formik.isValid || !formik.dirty} // Disable button if form is invalid or untouched
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
