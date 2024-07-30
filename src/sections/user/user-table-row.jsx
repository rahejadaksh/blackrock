import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useState } from 'react';
import TrendChart from './TrendChart';

export default function StockTableRow({
  selected,
  ticker,
  name,
  currentPrice,
  trend,
  recommendationScore,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Typography variant="subtitle2" noWrap>
            {ticker}
          </Typography>
        </TableCell>

        <TableCell>{name}</TableCell>

        <TableCell align="right">{currentPrice}</TableCell>

        <TableCell align="center">
         <TrendChart trend="positive" /> {/* Add the chart here */}
        </TableCell>

        <TableCell align="center">
          <Label color={recommendationScore === 1 ? 'success' : 'error'}>
            {recommendationScore === 1 ? 'Buy' : 'Sell'}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

StockTableRow.propTypes = {
  ticker: PropTypes.string,
  name: PropTypes.string,
  currentPrice: PropTypes.number,
  trend: PropTypes.string,
  recommendationScore: PropTypes.number,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
};
