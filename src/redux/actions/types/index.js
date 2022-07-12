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

export { loginTypes, newsTypes, registrationTypes };