import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
import Netflix from '../assets/icons/netflix.png';
import Gaming from '../assets/icons/controller.png';
import BasketBall from '../assets/icons/basketball.png'
import Digital from '../assets/icons/digital-art.png'

const intereststab = [
    { logo: Netflix, label: 'Series' },
    { logo: Gaming, label: 'Gaming' },
    { logo: BasketBall, label: 'BasketBall' },
    { logo: Digital, label: 'Digital art' },

  ];

const InterestDetails = () => {
    const {t}=useTranslation()
  return (
    <Box id='interests' sx={{mt:2}}>
        <Box className="title-box">
             <Typography variant='h5' className='title'> {t('interests')}</Typography>
        </Box>

        <Box className="bg-slate-900 bg-opacity-70 skills-box" 
            sx={{display:"flex",flexDirection:"row", flexWrap:{xs:'wrap',lg:'nowrap'}
        }} >
           
          {intereststab?.map((skill, index) => (
            <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent:'center',
              alignItems:'center',gap:1
            }}
            >
                  <img style={{width: "50px", height: "50px" }}src={skill.logo} alt={skill.label} />
                  <Typography style={{ color: "white" }}>{skill.label}</Typography>
              </Box>
          ))}
        </Box>
 </Box>
  )
}

export default InterestDetails