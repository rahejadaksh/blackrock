// src/pages/see-more/IframeCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

// Component for rendering a card with a YouTube video
const IframeCard = ({ title, videoId }) => (
  <Card sx={{ maxWidth: 445, mb: 4 }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </CardContent>
    <iframe
      width="100%"
      height="200"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allowFullScreen
      style={{ border: 'none' }}
    />
  </Card>
);

// PropTypes validation
IframeCard.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default IframeCard;
