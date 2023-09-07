import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsDetails from './components/ProjectsDetails'
import SkillsDetails from './components/SkillsDetails'
import './translation/i18n'
import Home from './pages/Home'

const App=() =>{
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar/>
                <Routes>
                    <Route path="/" element ={<Home/>}/>            
                    <Route path="/aboutMe" element ={<AboutMe/>}/>
                    <Route path="/skills" element ={<SkillsDetails/>}/>
                    <Route path="/projects" element ={<ProjectsDetails/>}/>
                </Routes>
            <Footer/>
         </Box>
    )
}
export default App