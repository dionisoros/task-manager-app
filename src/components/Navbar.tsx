import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import { LanguageTypes } from '../store/config/types.ts';
import useTranslationMenu from '../hooks/useTranslationMenu.ts';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {
    translate,
    selectedLanguage,
    menuEl,
    handleLanguageClose,
    handleOnClickLanguage,
    handleLanguageChange,
  } = useTranslationMenu();

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
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton color="inherit" onClick={handleOnClickLanguage}>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={menuEl} open={!!menuEl} onClose={handleLanguageClose}>
            <MenuItem
              onClick={() => handleLanguageChange(LanguageTypes.enUS)}
              selected={selectedLanguage === LanguageTypes.enUS}
            >
              {translate('app.translation.language.en')}
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange(LanguageTypes.frFR)}
              selected={selectedLanguage === LanguageTypes.frFR}
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
