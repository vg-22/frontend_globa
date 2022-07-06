import React, { memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AuthModal from '../AuthModal';
import './styles.css';

const HEADER_TITLE = 'News';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {HEADER_TITLE}
          </Typography>
          <Box>
            <AuthModal />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
