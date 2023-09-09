import { Box, Typography } from '@mui/material'
import React, { Children } from 'react'
import { useTranslation } from 'react-i18next'
const BoxDetails = ({id,title,children}) => {
    const {t}=useTranslation()
    
  return (
    <Box id={id}>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t(title)}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70" 
        sx={{display:'flex',flexDirection:'row',
        justifyContent:'space-between',alignItems:"center"
        ,gap:2,flexWrap:{xs:'wrap-reverse',lg:'nowrap'}}}>
           {children} 
       </Box>
    </Box>
  )
}

export default BoxDetails