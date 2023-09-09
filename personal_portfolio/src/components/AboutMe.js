import React from 'react'
import { useTranslation } from 'react-i18next'
import Me from '../assets/images/me-removebg-preview.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
const AboutMe = () => {
    const {t}=useTranslation()
    const handleLInkedLnClick = () => {
        window.open('https://www.linkedin.com/in/charbel-mehou/', '_blank')
      }
      
      const handleGithubClic=()=>{
        window.open('https://github.com/CharbelMehou?tab=repositories','_blank')
      }
      const handleEmailClick = () => {
        window.open('mailto:mehoucharbel@gmail.com?subject=Contact depuis le site Web', '_blank');
      }
  return (
    <Box id='aboutMe'>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('about')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 about-me-box" 
        sx={{display:'flex',flexDirection:'row',
        justifyContent:'space-between',alignItems:"center"
        ,gap:2,flexWrap:{xs:'wrap-reverse',lg:'nowrap'}}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:2}}>

                <Box className=".about-me-description" style={{color:'white',textAlign:'justify'}}>
                <Typography variant='h5' >{t('me-1')} </Typography> 
                <Typography variant='h5' > {t('me-2')}</Typography>
                <Typography variant='h5' >{t('me-3')}</Typography>
                </Box>
            
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:'center',gap:1}}>
                    <Button
                        variant="contained"
                        onClick={handleLInkedLnClick}
                        sx={{backgroundColor:"#416DD1",gap:1}}
                        >
                        <LinkedInIcon /> LinkedIn
                    </Button>

                    <Button
                        variant="contained"
                        sx={{backgroundColor:"#416DD1",gap:1}}
                        onClick={handleGithubClic}
                        >
                        <GitHubIcon /> Github
                    </Button>
                    <Button
                        variant="contained"
                        sx={{backgroundColor:"#416DD1",gap:1}}
                        onClick={handleEmailClick}
                        >
                        <MailOutlineIcon />  Gmail 
                    </Button>
                    <Button
                        variant="contained"
                        sx={{backgroundColor:"#416DD1",gap:1}}
                        >
                        <PhoneIcon />  
                        07 58 65 94 51 
                    </Button>
                        
                </Box>
            </Box>
                <Box className="about-me-image" 
                    sx={{display:'flex',
                    justifyContent:{xs:'flex-start',lg:'flex-end'},
                     borderRadius: "25% 10%",
                    border:"3px solid #416DD1",
                    }}>
                   <img  sx={{width : {xs :"50px",lg:"100px"}
                   ,height:{xs:"50px",lg:"100px"}}}src={Me} alt="Me" />
                 </Box>
       </Box>
    </Box>
  )
}

export default AboutMe