import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { getToken } from '../../helpers/localStorage';
import { loginRequested, logoutUser } from '../../redux/actions/actionCreators/login';
import AuthModal from '../AuthModal';

import './styles.css';

const HEADER_TITLE = 'News';

function Header() {
  const isAccess = useSelector((state) => state.authReducer.isAccess);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    if (getToken()) dispatch(loginRequested());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {HEADER_TITLE}
          </Typography>
          {isAccess
            ? (
              <Button variant="hover" onClick={logOutUser}>
                LogOut
              </Button>
            )
            : (
              <Box>
                <AuthModal />
              </Box>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
