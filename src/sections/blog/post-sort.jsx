import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

PostSort.propTypes = {
  options: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired, // Added to manage the selected value
};

export default function PostSort({ options, onSort, value }) {
  return (
    <TextField
      select
      size="small"
      value={value}
      onChange={onSort}
      sx={{ width: 200 }} // Adjust width for better fit
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
