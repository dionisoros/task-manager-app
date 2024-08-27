import React from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import useTranslationMenu from '@/hooks/useTranslationMenu.ts';
import LanguageTypes from '@/types/Language';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const { translate, selectedLanguage, menuEl, handleLanguageClose, handleOnClickLanguage, handleLanguageChange } =
    useTranslationMenu();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ChecklistRtlIcon />
          <Typography variant="h6">{translate('app.title')}</Typography>
        </Box>
        <Box>
          <IconButton
            color="inherit"
            aria-label={translate(
              `app.translation.header.ariaLabel.${darkMode ? 'SwitchToLightMode' : 'SwitchToDarkMode'}`,
            )}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleOnClickLanguage}
            id="language-button"
            aria-haspopup="true"
            aria-expanded={!!menuEl ? 'true' : undefined}
            aria-controls={!!menuEl ? 'language-menu' : undefined}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="language-menu"
            aria-labelledby="language-button"
            anchorEl={menuEl}
            open={!!menuEl}
            onClose={handleLanguageClose}
          >
            <MenuItem
              onClick={() => handleLanguageChange(LanguageTypes.EN)}
              selected={selectedLanguage === LanguageTypes.EN}
            >
              {translate('app.translation.language.en')}
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange(LanguageTypes.FR)}
              selected={selectedLanguage === LanguageTypes.FR}
            >
              {translate('app.translation.language.fr')}
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
