import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({screen,vercelLink,githubLink,description}) => {
  const {t} =useTranslation()
  const handleVercelClick = () => {
    window.open( vercelLink, '_blank')
  }
  const handleGithubClick = () => {
    window.open( githubLink, '_blank')
  }
  return (
    <Box className="projectCard" sx={{display:'flex',justifyContent:'row'}}>   
              <img className="screen-project-image" src={screen} alt="image" />
              
              <Box sx={{display:"flex",flexDirection:'column',borderLeft:"2px solid #416DD1",gap:1,p:1}}>
                <Typography style={{color:"white"}}>{t(description)}</Typography>
                <Button
                  variant="contained"
                  onClick={handleVercelClick}
                  sx={{backgroundColor:"#416DD1"}}
                  >
                  {t('view-here')}
                </Button>
                <Button
                  variant="contained"
                  onClick={handleGithubClick}
                  sx={{backgroundColor:"#416DD1"}}
                  >
                    {t('github-view-here')} 
                </Button>
              </Box>

    </Box>
  )
}

export default ProjectCard