import { Box } from '@mui/material'
import React from 'react'
import AboutMe from '../components/AboutMe'
import ProjectsDetails from '../components/ProjectsDetails'
import SkillsDetails from '../components/SkillsDetails'

const Home = () => {
  return (
    <Box>
        <AboutMe/>
        <SkillsDetails/>
        <ProjectsDetails/>
    </Box>
  )
}

export default Home