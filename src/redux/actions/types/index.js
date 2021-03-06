const registrationTypes = {
  REGISTRATION_REQUESTED: 'REGISTRATION_REQUESTED',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR',
};

const newsTypes = {
  GET_NEWS_REQUESTED: 'GET_NEWS_REQUESTED',
  GET_NEWS_SUCCESS: 'GET_NEWS_SUCCESS',
  GET_NEWS_ERROR: 'GET_NEWS_ERROR',
};

const loginTypes = {
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_USER: 'LOGOUT_USER',
};

const userTypes = {
  USER_REQUESTED: 'USER_REQUESTED',
  USER_SUCCESS: 'USER_SUCCESS',
  USER_ERROR: 'USER_ERROR',
};

const accessTypes = {
  ACCESS_REQUESTED: 'ACCESS_REQUESTED',
  ACCESS_SUCCESS: 'ACCESS_SUCCESS',
  ACCESS_ERROR: 'ACCESS_ERROR',
};

const userNewsTypes = {
  USER_NEWS_REQUESTED: 'USER_NEWS_REQUESTED',
  USER_NEWS_SUCCESS: 'USER_NEWS_SUCCESS',
  USER_NEWS_ERROR: 'USER_NEWS_ERROR',
};

export {
  loginTypes, newsTypes, registrationTypes, userTypes, accessTypes, userNewsTypes,
};
