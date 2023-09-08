import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LangageSwitcher from './langageSwitcher'
import Logo from '../assets/icons/logoName.png'
const Navbar = () => {
  const {t} = useTranslation();
  return (
    <Box  className="navbar" sx={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between'}}>
        <img src={Logo} style={{height:'50px'}}alt="logo"/>
        <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems: 'flex-end',gap:2}} >
          <Link  to="/" className='link-style'>{t('about')}</Link>
          <Link to='/aboutMe' className='link-style'>{t('contacts')}</Link>
          <Link to='/projects' className='link-style'>{t('projects')}</Link>  
          <Link to='/skills' className='link-style'>{t('skills')}</Link>
        </Box>
         <Box sx={{ display: 'flex',alignItems: 'flex-end', justifyContent: { xs: 'flex-start', lg: 'flex-end' } }}>
            <LangageSwitcher/>
         </Box>
    </Box>
  );
}

export default Navbar;





