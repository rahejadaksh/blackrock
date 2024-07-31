import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { account } from 'src/_mock/account';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Share Your Profile',
    icon: 'eva:share-fill',
  },
];

// ----------------------------------------------------------------------

const SHARE_OPTIONS = [
  { label: 'Instagram', icon: 'eva:instagram-fill' },
  { label: 'Snapchat', icon: 'eva:snapchat-fill' },
  { label: 'Facebook', icon: 'eva:facebook-fill' },
  { label: 'Twitter', icon: 'eva:twitter-fill' },
];

// ----------------------------------------------------------------------

function ProfileCardPreview({ onClose }) {
  return (
    <Box sx={{ p: 2, width: 300, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Profile Preview
      </Typography>
      <Avatar
        src={account.photoURL}
        alt={account.displayName}
        sx={{ width: 56, height: 56, mb: 1 }}
      />
      <Typography variant="subtitle1">{account.displayName}</Typography>
      <Typography variant="body2" color="text.secondary">
        {account.email}
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">This is how your profile will look when shared.</Typography>
      </Box>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <IconButton onClick={onClose} sx={{ color: 'text.primary' }}>
          <Iconify icon="eva:close-fill" />
        </IconButton>
      </Box>
    </Box>
  );
}

ProfileCardPreview.propTypes = {
  onClose: PropTypes.func.isRequired, // Add PropTypes validation
};

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
    setShowShareOptions(false);
    setShowProfilePreview(false);
  };

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleOptionClick = () => {
    setShowShareOptions(false);
    setShowProfilePreview(true);
  };

  const handleMenuItemClick = (label) => {
    handleClose();
    if (label === 'Profile') {
      navigate('/profile');
    } else if (label === 'Logout') {
      navigate('/login');
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              if (option.label === 'Share Your Profile') {
                handleShareClick();
              } else {
                handleMenuItemClick(option.label);
              }
            }}
          >
            <Iconify icon={option.icon} width={24} height={24} sx={{ mr: 1 }} />
            {option.label}
          </MenuItem>
        ))}

        {showShareOptions && (
          <>
            <Divider sx={{ borderStyle: 'dashed', my: 1 }} />
            {SHARE_OPTIONS.map((option) => (
              <MenuItem key={option.label} onClick={handleOptionClick}>
                <Iconify icon={option.icon} width={24} height={24} sx={{ mr: 1 }} />
                {option.label}
              </MenuItem>
            ))}
          </>
        )}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={() => handleMenuItemClick('Logout')}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>

      {showProfilePreview && (
        <Popover
          open={showProfilePreview}
          anchorEl={open}
          onClose={() => setShowProfilePreview(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 300,
            },
          }}
        >
          <ProfileCardPreview onClose={() => setShowProfilePreview(false)} />
        </Popover>
      )}
    </>
  );
}
