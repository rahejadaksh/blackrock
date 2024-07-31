import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES } from 'src/constants';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const { i18n } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Iconify
            icon="mdi:coin"
            width={24}
            height={24}
            sx={{ color: '#FFD700' }}  // Yellow color
          />
          <span style={{ color: theme.palette.text.secondary }}>100 coins</span>
        </Stack>
        <Select
          labelId="language-selector-label"
          value={i18n.language}
          onChange={onChangeLang}
          label="Language"
          sx={{ height: '35px' }}
        >
          {LANGUAGES.map(({ code, label }) => (
            <MenuItem key={code} value={code}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ ml: 2, mr: 2 }}
            onClick={handleClick}
          >
            Take Quiz
          </Button>
        </Box>
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
