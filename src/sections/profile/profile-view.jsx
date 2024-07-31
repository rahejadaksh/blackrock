import React from 'react';
import { Box, Typography, Avatar, Button, Grid } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from 'src/theme/css';

export default function ProfilePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Box sx={{ p: 3, mt:5 }}>

        {/* Shareable Card */}
        <Box
          sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            boxShadow: 3,
            bgcolor: 'background.paper',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Avatar
            src="../../../public/assets/images/avatars/avatar_25.jpg" 
            alt="Profile Name"
            sx={{
              width: 100,
              height: 100,
              position: 'absolute',
              top: -50,
              right: 16,
              boxShadow: 3,
            }}
          />
          <Typography variant="h6" gutterBottom>
            Your Profile Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coins: 100
          </Typography>
          <Typography variant="body1" gutterBottom>
            Rate of Interest on Total Capital: 8.5%
          </Typography>

          {/* Social Media Share Buttons */}
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="outlined">Instagram</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Snapchat</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Facebook</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Twitter</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
