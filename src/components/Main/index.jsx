import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { getNewsRequested } from '../../redux/actions/actionCreators';
import NewsCard from '../NewsCard';

import useStyles from './styles';

function Main() {
  const dispatch = useDispatch();
  const { news } = useSelector(((item) => item.newsReducer));
  const classes = useStyles();

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const dataNews = news.map((item) => (
    <NewsCard cardContent={item} key={item.id} />
  ));

  return <Box className={classes.container}>{dataNews}</Box>;
}

export default memo(Main);
