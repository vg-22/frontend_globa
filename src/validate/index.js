import * as yup from 'yup';

const validationSchemaForLogin = yup.object({
  email: yup
    .string('Enter email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const validationSchemaForRegistration = yup.object({
  email: yup
    .string('Enter email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  name: yup
    .string('Enter name')
    .min(2, 'Name should be of minimum 2 characters length')
    .required('Name is required'),
});

export { validationSchemaForLogin, validationSchemaForRegistration };
