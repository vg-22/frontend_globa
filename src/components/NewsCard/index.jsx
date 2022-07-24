import React, { memo } from 'react';
import { string, shape } from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import contemplative from '../../img/imageForProjectOnFront.jpg';

import './styles.css';

function NewsCard({
  cardContent,
}) {
  const { title, text } = cardContent;
  return (
    <Card sx={{ maxWidth: 345 }} className="containerCard">
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
  cardContent: shape({
    title: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

export default memo(NewsCard);
