import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({screen,vercelLink,githubLink,description,tags}) => {
  const flexWrapValue = tags?.length > 3 ? "wrap" : "nowrap";
  const {t} =useTranslation()
  const handleVercelClick = () => {
    window.open( vercelLink, '_blank')
  }
  const handleGithubClick = () => {
    window.open( githubLink, '_blank')
  }
  return (
    <Box className="projectCard" sx={{display:'flex',flexDirection:'column'}}>
              <Box sx={{borderRadius:'2px solid #416DD1'}}>
                    <img className="screen-project-image" src={screen} alt="image" />
              </Box>   
              
              <Box sx={{display:"flex",flexDirection:'column',gap:1,p:1}}>
                <Typography style={{color:"white"}}>{t(description)}</Typography>
                <Button
                  variant="contained"
                  onClick={handleVercelClick}
                  size='small'
                  sx={{backgroundColor:"#416DD1"}}
                  >
                  {t('view-here')}
                </Button>
                <Button
                  variant="contained"
                  size='small'
                  onClick={handleGithubClick}
                  sx={{backgroundColor:"#416DD1"}}
                  >
                    {t('github-view-here')} 
                </Button>
                <Box sx={{display:'flex',flexDirection:'row',gap:1,flexWrap:flexWrapValue}}>

                  {tags?.map((tag,index)=>(
                    <Button key={index}
                    variant="contained"
                    size='small'
                    onClick={handleGithubClick}
                    sx={{backgroundColor:"yellow",color:'black'}}
                    >
                       {t(tag.label)} 
                   </Button>

                  ))}
                  </Box>
              </Box>

    </Box>
  )
}

export default ProjectCard