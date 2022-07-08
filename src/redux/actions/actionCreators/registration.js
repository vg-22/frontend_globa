import { registrationTypes } from '../types';

export const registrationRequested = (payload) => ({
  type: registrationTypes.REGISTRATION_REQUESTED, payload,
});

export const registrationSuccess = (payload) => ({
  type: registrationTypes.REGISTRATION_SUCCESS,
  payload,
});

export const registrationError = (error) => ({
  type: registrationTypes.REGISTRATION_ERROR,
  error,
});
