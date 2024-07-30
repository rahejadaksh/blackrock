import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import IframeCard from './IframeCard'; // Adjust the path as needed

// Sample data for the YouTube videos
const videoData = [
  {
    title: 'Introduction to Financial Markets',
    videoId: 'CzMzNanG7gI', // Replace with actual YouTube video IDs
  },
  {
    title: 'Fundamentals of Intra Trading',
    videoId: 'rBHK63i03F4',
  },
  {
    title: 'Advanced Technical Analysis',
    videoId: '4Asucz1kcUw',
  },
  {
    title: 'Financial Statement Analysis',
    videoId: '1UjAh9Z9vkU',
  },
  {
    title: 'What is Watchlist?',
    videoId: 'ZlZmsknpXrg',
  },
  {
    title: 'Best 50 Stock For Intraday',
    videoId: 'zZScoY72rlE',
  },
];

export default function SeeMorePage() {
  return (
    <Container>
      <Box sx={{ my: 4, position: 'relative' }}>
        <Typography variant="h4" gutterBottom>
          See More
        </Typography>
        {/* "Take Quiz" Button */}
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Button variant="contained" color="primary" size="large">
            Take Quiz
          </Button>
        </Box>

        <Typography variant="body1" paragraph sx={{ mt: 8 }}>
          Explore more details with the following videos:
        </Typography>

        {/* Render video cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {videoData.map((item, index) => (
            <IframeCard key={index} title={item.title} videoId={item.videoId} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
