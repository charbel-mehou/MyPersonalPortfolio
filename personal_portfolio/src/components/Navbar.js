import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import langageSwitcher from './langageSwitcher'
const Navbar = () => {
  const {t} = useTranslation();
  return (
    <Box  className="navbar" sx={{display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', width: { xs: '50%', lg: '100%' } }}>
        <Stack direction="row" gap="20px"  fontSize="20px" >
          <Link to="/" className='link-style'>{t('about')}</Link>
          <Link to='/contacts' className='link-style'>{t('contacts')}</Link>
          <Link to='/projects' className='link-style'>{t('projects')}</Link>  
          <Link to='/skills' className='link-style'>{t('skills')}</Link>
        </Stack>
         <Box sx={{ display: 'flex',alignItems: 'flex-end', justifyContent: { xs: 'flex-start', lg: 'flex-end' } }}>
          <langageSwitcher />
         </Box>
      </Box>
    </Box>
  );
}

export default Navbar;





