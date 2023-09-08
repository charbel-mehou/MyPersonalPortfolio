import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
import Me from '../assets/images/me-removebg-preview.png'
const AboutMe = () => {
    const {t}=useTranslation()
  return (
    <Box id='aboutMe'>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('about')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 about-me-box" sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:"center",gap:2}}>
            <Box className=".about-me-description" style={{color:'white',textAlign:'left'}}>
               <Typography variant='h5' >{t('me-1')} </Typography> 
               <Typography variant='h5' > {t('me-2')}</Typography>
               <Typography variant='h5' >{t('me-3')}</Typography>
            </Box>
            <Box className=".about-me-image" 
            sx={{display:'flex',
            justifyContent:{xs:'flex-start',lg:'flex-end'},
            flexWrap:{xs:'wrap-reverse',lg:'nowrap',
                     borderRadius: "25% 10%",
                    border:"3px solid #416DD1"}}}>
                 <img  src={Me} alt="Me" />
            </Box>
       </Box>
    </Box>
  )
}

export default AboutMe