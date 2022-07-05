import React, { memo } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { string } from 'prop-types';

import useStyles from './styles';

import contemplative from '../../img/contemplative.jpeg';

function NewsCard({
  title,
  text,
}) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.containerCard}>
      <CardMedia
        component="img"
        height="140"
        src={contemplative}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  title: string,
  text: string,
};

NewsCard.defaultProps = {
  title: '',
  text: '',
};

export default memo(NewsCard);
