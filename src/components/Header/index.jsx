import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { deleteToken, getToken } from '../../helpers/localStorage';
import { logoutUser } from '../../redux/actions/actionCreators/login';
import AuthModal from '../AuthModal';
import accessRequested from '../../redux/actions/actionCreators/access';

import './styles.css';

const HEADER_TITLE = 'News';

function Header() {
  const isAccess = useSelector((state) => state.authReducer.isAccess);
  const dispatch = useDispatch();
  const logOutUser = () => {
    deleteToken();
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (getToken()) dispatch(accessRequested());
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
