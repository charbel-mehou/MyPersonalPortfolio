import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
const AboutMe = () => {
    const {t}=useTranslation()
  return (
    <Box id='aboutMe'>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('about')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 skills-box" sx={{p:1}} >
        
       </Box>
    </Box>
  )
}

export default AboutMe