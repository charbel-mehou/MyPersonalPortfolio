import React, { useState } from 'react';
import { Box, IconButton, Popover, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/icons/logoName.png";

import { useTranslation } from 'react-i18next';
import LangageSwitcher from './langageSwitcher';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      className="navbar"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img src={Logo} alt="logo" style={{ height: '50px' }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, fontSize: '20px' }}>
        {/* Nav items for larger screens */}
        <a href="#aboutMe" className="link-style">{t('about')}</a>
        <a href="#skills" className="link-style">{t('skills')}</a>
        <a href="#projects" className="link-style">{t('projects')}</a>
        <a href="#certifications" className="link-style">{t('certifications')}</a>
        <a href="#interests" className="link-style">{t('interests')}</a>
        <LangageSwitcher />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton onClick={handleMenuClick} sx={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1">
              <a href="#aboutMe" onClick={handleMenuClose}>
                {t('about')}
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <a href="#skills" onClick={handleMenuClose}>
                {t('skills')}
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <a href="#projects" onClick={handleMenuClose}>
                {t('projects')}
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <a href="#certifications" onClick={handleMenuClose}>
                {t('certifications')}
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <a href="#interests" onClick={handleMenuClose}>
                {t('interests')}
              </a>
            </Typography>
          </Box>
          <LangageSwitcher />
        </Popover>
      </Box>
    </Box>
  );
};

export default Navbar;
