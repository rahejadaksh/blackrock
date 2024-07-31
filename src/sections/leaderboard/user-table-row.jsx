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

export default function StockTableRow({
  key,
  name,
  currentPrice,
  trend,
  score,
  esgScore,
  selected,
  handleClick
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const trendStyle = {
    backgroundColor: trend === 'positive' ? '#4caf50' : '#f44336',
    color: 'white',
    borderRadius: '8px',
    padding: '4px 8px',
    display: 'inline-block',
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{Math.round(currentPrice)}</TableCell>
        <TableCell align="center">
          <span style={trendStyle}>{trend}</span>
        </TableCell>
        <TableCell align="center">{score}</TableCell>
        <TableCell align="center">{Math.round(esgScore)}</TableCell>
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
  key: PropTypes.string,
  name: PropTypes.string,
  currentPrice: PropTypes.number,
  trend: PropTypes.string,
  score: PropTypes.number,
  esgScore: PropTypes.number,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
};
