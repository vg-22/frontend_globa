export const saveToken = (token) => {
  try {
    return localStorage.setItem('token', token);
  } catch (error) {
    return error;
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem('token');
  } catch (error) {
    return error;
  }
};

export const deleteToken = () => {
  try {
    return localStorage.removeItem('token');
  } catch (error) {
    return error;
  }
};
