import React, { memo, useState } from 'react';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import { newsModalInitialValues, userModalInitialValues } from '../constant';
import { getValidateSchemaForUserModal } from '../../validate';

function UserModal() {
  const [modalType, checkModalType] = useState('Add News');
  const [open, setOpen] = useState(false);
  const isNewsModal = modalType === 'Add News';

  const inputFieldArray = isNewsModal ? ['title', 'text', 'image', 'tag'] : ['email', 'name'];
  const validationSchema = getValidateSchemaForUserModal(modalType);

  const formik = useFormik({
    initialValues: isNewsModal ? newsModalInitialValues : userModalInitialValues,
    validationSchema,
    onSubmit: (values) => {
      if (isNewsModal) {
        alert(JSON.stringify(values));
      } else {
        alert(JSON.stringify(values));
      }
    },
  });

  const handleChange = (event) => {
    formik.handleChange(event);
    const { files } = event.target;
    if (files) {
      formik.setFieldValue('image', files[0], false);
    }
  };

  const handleClickOpen = (event) => {
    checkModalType(event.target.name);
    setOpen(true);
  };

  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
  };

  return (

    <>
      <Box>
        <Button
          name="Add News"
          onClick={handleClickOpen}
        >
          Add News
        </Button>
        <Button
          name="Edit Profile"
          onClick={handleClickOpen}
        >
          Edit Profile
        </Button>
      </Box>
      <Dialog open={open}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>{modalType}</DialogTitle>
          <DialogContent>

            {inputFieldArray.map((item) => (item === 'image'
              ? (
                <TextField
                  fullWidth
                  id={item}
                  key={item}
                  name={item}
                  type="file"
                  onBlur={formik.handleBlur}
                  onChange={handleChange}
                  error={formik.touched[item] && Boolean(formik.errors[item])}
                  helperText={formik.touched[item] && formik.errors[item]}
                />
              )
              : (
                <TextField
                  fullWidth
                  id={item}
                  key={item}
                  name={item}
                  label="text"
                  type="text"
                  value={formik.values[item]}
                  onBlur={formik.handleBlur}
                  onChange={handleChange}
                  error={formik.touched[item] && Boolean(formik.errors[item])}
                  helperText={formik.touched[item] && formik.errors[item]}
                />
              )))}

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>

  );
}

export default memo(UserModal);
