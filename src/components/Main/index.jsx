import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequested } from '../../redux/actions/actionCreators';
import NewsCard from '../NewsCard';
import useStyles from './styles';

function Main() {
  const dispatch = useDispatch();
  const { news } = useSelector(((item) => item));
  const classes = useStyles();

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const dataNews = news.map(({ title, text, id }) => (
    <NewsCard title={title} key={id} text={text} />
  ));

  return <Box className={classes.container}>{dataNews}</Box>;
}

export default Main;
