import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using react-router
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

const StarRating = ({ rating }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {[...Array(Math.floor(rating))].map((_, index) => (
      <Typography key={index} sx={{ fontSize: 20, color: 'gold' }}>
        ★
      </Typography>
    ))}
    {rating % 1 !== 0 && (
      <Typography sx={{ fontSize: 20, color: 'gold' }}>
        ★
      </Typography>
    )}
    {[...Array(5 - Math.ceil(rating))].map((_, index) => (
      <Typography key={index + Math.floor(rating)} sx={{ fontSize: 20, color: 'grey' }}>
        ☆
      </Typography>
    ))}
  </Box>
);

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function ShopProductCard({ product }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {product.status && renderStatus} */}
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <StarRating rating={product.rating} />
          {/* Static "See More" Link */}
          <RouterLink to="/see-more">
            <Link
              sx={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
            >
              <Typography variant="body2" sx={{ ml: 2 }}>
                See More
              </Typography>
            </Link>
          </RouterLink>
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};
