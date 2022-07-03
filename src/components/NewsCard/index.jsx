import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { string } from 'prop-types';

import useStyles from "./styles";

const MediaCard = ({
  title,
  text,
}) => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.containerCard}>
      <CardMedia
        component="img"
        height="140"
        src={require('../../img/contemplative.jpeg')}
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

MediaCard.propTypes = {
  title: string,
  text: string,
};

export default memo(MediaCard);