import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material'; // Using Avatar from MUI

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function PostCard({ post }) {
  const { cover, title, view, comment, share, author, createdAt } = post;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            alt={title}
            src={cover}
            sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
          <Avatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              width: 40,
              height: 40,
              border: '2px solid white',
            }}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {fDate(createdAt)}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Typography variant="caption" color="textSecondary">
              {fShortenNumber(comment)} Comments
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {fShortenNumber(view)} Views
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {fShortenNumber(share)} Shares
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
