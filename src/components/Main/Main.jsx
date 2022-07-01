import React, { useEffect } from "react";

import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";

import { getNewsRequested } from "../../redux/actions/actionCreators";

function Main(){

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsRequested())
  },[])

  return(
  <Box>
    {}
  </Box>
  ) 

}

export default Main;