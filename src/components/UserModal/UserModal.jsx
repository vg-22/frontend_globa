import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import { validationSchemaForLogin, validationSchemaForRegistration } from '../../validate';
import { loginRequested } from '../../redux/actions/actionCreators/login';
import { registrationRequested } from '../../redux/actions/actionCreators/registration';

function UserModal() {
  const [modalType, checkModalType] = useState('Add News');
  const [open, setOpen] = useState(false);
  const isNewsModal = modalType === 'Add News';
  const dispatch = useDispatch();
 
  const { error, isLoading } = selectNews();
  const validationSchema = getSchemaForNews(modalType);
  const inputFieldArray = isNewsModal ? ['title', 'text', 'image', 'tag'] : ['email', 'name'];


  const formik = useFormik({
    initialValues: isNewsModal ? userModalInitialValues : newsModalInitialValues,
    validationSchema,
    onSubmit: (values) => {
      if (isNewsModal) {
        dispatch(createNews(values));
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

            {error && <Alert severity="error">{error}</Alert>}

            {inputFieldArray.map((item) => (item === 'image'
              ? (
                <TextField
                  fullWidth
                  id={item}
                  key={item}
                  name={item}
                  type="file"
                  disabled={isLoading}
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
                  disabled={isLoading}
                  value={formik.values[item]}
                  onBlur={formik.handleBlur}
                  onChange={handleChange}
                  error={formik.touched[item] && Boolean(formik.errors[item])}
                  helperText={formik.touched[item] && formik.errors[item]}
                />
              )))}

            {isLoading && <LinearProgress />}

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
