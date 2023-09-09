import { Box } from '@mui/material'
import React from 'react'
import AboutMe from '../components/AboutMe'
import ProjectsDetails from '../components/ProjectsDetails'
import SkillsDetails from '../components/SkillsDetails'
import InterestDetails from '../components/InterestDetails'
import CertificationsDetails from '../components/CertificationsDetails'

const Home = () => {
  return (
    <Box>
        <AboutMe/>
        <SkillsDetails/>
        <ProjectsDetails/>
        <CertificationsDetails/>
        <InterestDetails/>
    </Box>
  )
}

export default Home