import React from 'react'
import {Box,Typography} from '@mui/material' 
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import Logo from '../assets/images/Logo.png'
import Project1 from '../assets/images/project1Screen.png'
import Project2 from '../assets/images/project2Screen.png'
const ProjectsDetails = () => {

  const {t}=useTranslation()
  return (
    <Box id='projects'sx={{mt:2}}>
       <Box className="title-box">
         <Typography variant='h5' className='title'> {t('projects')}</Typography>
       </Box>

        <Box className="bg-slate-900 bg-opacity-70 skills-box" sx={{display:"flex",flexDirection:"row",flexWrap:"wrap"}} >
          <ProjectCard
            title={"projet"}
            screen={Project1}
            vercelLink={" https://myfitjourney-app.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/FitnessApp"}
            descriptions={[{label:"myftjourney-d1"},{label:"myftjourney-d2"}]}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}
          />
           <ProjectCard
            title={"web-portfolio"}
            screen={Project2}
            vercelLink={"https://my-personal-portfolio-lyart.vercel.app/"}
            githubLink={"https://github.com/CharbelMehou/MyPersonalPortfolio"}
            descriptions={[{label:"myportfolio-d1"} ]}
            tags={[{label:"#React"},{label:"#JavaScript"},{label:"#CSS"}]}

          />
       </Box>
    </Box>
  )
}

export default ProjectsDetails