import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import Logo from '../assets/images/Logo.png'
const ProjectsDetails = () => {

  const {t}=useTranslation()
  return (
    <Box id='projects'>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('projects')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 skills-box" sx={{display:"flex",flexDirection:"row",p:1,flexWrap:{xs:"wrap",lg:'nowrap'}}} >
          <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
          />
           <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
          />
           <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
          />
           <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
          />
       </Box>
    </Box>
  )
}

export default ProjectsDetails