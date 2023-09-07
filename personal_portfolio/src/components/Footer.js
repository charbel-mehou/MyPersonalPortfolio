import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
const handleLInkedLnClick = () => {
  window.open('https://www.linkedin.com/in/charbel-mehou/', '_blank')
}

const handleGithubClic=()=>{
  window.open('https://github.com/CharbelMehou/FitnessApp','_blank')
}
const handleEmailClick = () => {
  window.open('mailto:mehoucharbel@gmail.com?subject=Contact depuis le site Web', '_blank');
}
const Footer = () => {
  const {t} =useTranslation()
  return(
  <Box className="footer">
    
    <Box sx={{display:"flex",flexDirection:"column",gap:1,pb:2}}>

    <Typography variant="h6" textAlign="center" >{t('made-by')}</Typography>
    
    <Typography variant="h6" textAlign="center" >
    {t('copyright')} 
    </Typography>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:'center',gap:1}}>
      <Button
        variant="contained"
        onClick={handleLInkedLnClick}
        sx={{backgroundColor:"#416DD1"}}
        >
         <LinkedInIcon />
      </Button>

      <Button
        variant="contained"
        sx={{backgroundColor:"#416DD1"}}
        onClick={handleGithubClic}
        >
        <GitHubIcon />
      </Button>
       <Button
          variant="contained"
          sx={{backgroundColor:"#416DD1"}}
          onClick={handleEmailClick}
        >
        <MailOutlineIcon />   
     </Button>
    </Box>
    </Box>
  </Box>
)
}

export default Footer