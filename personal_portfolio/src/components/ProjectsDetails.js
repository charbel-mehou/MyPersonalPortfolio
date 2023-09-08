import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import Logo from '../assets/images/Logo.png'
import Project1 from '../assets/images/project1Screen.png'
const ProjectsDetails = () => {

  const {t}=useTranslation()
  return (
    <Box id='projects'>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('projects')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 skills-box" sx={{display:"flex",flexDirection:"row",flexWrap:"wrap"}} >
          <ProjectCard
            screen={Project1}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}
          />
           <ProjectCard
            screen={Logo}
            vercelLink={"https://my-personal-portfolio-lyart.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/MyPersonalPortfolio"}
            description={"tuttu"}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}

          />
           <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}

          />
           <ProjectCard
            screen={Logo}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            description={"tuttu"}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}

          />
       </Box>
    </Box>
  )
}

export default ProjectsDetails