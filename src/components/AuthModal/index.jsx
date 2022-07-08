import * as React from 'react';
import { useFormik } from 'formik';
import { memo, useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import { useDispatch } from 'react-redux';
import { validationSchemaForLogin, validationSchemaForRegistration } from '../../validate';
import { loginRequested } from '../../redux/actions/actionCreators/login';
import { registrationRequested } from '../../redux/actions/actionCreators/registration';

function AuthModal() {
  const [modalType, setModalType] = useState('Login');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isLogin = modalType === 'Login';
  const inputFieldArray = isLogin ? ['email', 'password'] : ['email', 'password', 'name'];

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    validationSchema: isLogin ? validationSchemaForLogin : validationSchemaForRegistration,
    onSubmit: (values) => {
      if (isLogin) {
        dispatch(loginRequested(values));
      } else {
        dispatch(registrationRequested(values));
      }
    },
  });

  const handleClickOpen = (event) => {
    setModalType(event.target.name);
    setOpen(true);
  };

  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
  };

  return (
    <div>
      <Box>
        <Button
          variant="outlined"
          sx={{ color: 'black' }}
          onClick={handleClickOpen}
          name="Login"
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{ color: 'black', ml: 2 }}
          onClick={handleClickOpen}
          name="Registration"
        >
          Registration
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{modalType}</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            {inputFieldArray.map((item) => (
              <TextField
                fullWidth
                id={item}
                name={item}
                label={item}
                key={item}
                value={formik.values[item]}
                onChange={formik.handleChange}
                error={formik.touched[item] && Boolean(formik.errors[item])}
                helperText={formik.touched[item] && formik.errors[item]}
              />
            ))}

            <Button component="button" color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default memo(AuthModal);
