import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { string, shape } from 'prop-types';

import useStyles from './styles';

function NewsCard({
  cardContent,
}) {
  const { title, text } = cardContent;
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.containerCard}>
      <CardMedia
        component="img"
        height="140"
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
  cardContent: shape({
    title: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

export default memo(NewsCard);
