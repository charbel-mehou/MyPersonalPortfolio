import React from 'react'
import {Box} from '@mui/material'
import ContactsDetails from '../components/ContactsDetails'
import ProjectsDetails from '../components/ProjectsDetails'
import SkillsDetails from '../components/SkillsDetails'

const Home = () => {
  return (
    <Box>
        <SkillsDetails/>
        <ProjectsDetails/>
        <ContactsDetails/>
    </Box>
  )
}

export default Home