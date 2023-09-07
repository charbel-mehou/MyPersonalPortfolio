import { Box } from '@mui/material'
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SkillsDetails from './components/SkillsDetails'
import ProjectsDetails from './components/ProjectsDetails'
import ContactsDetails from './components/ContactsDetails'
import './translation/i18n'

const App=() =>{
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar/>
                <Routes>
                    <Route path="/" element ={<Home/>}/>
                    <Route path="/skills" element ={<SkillsDetails/>}/>
                    <Route path="/projects" element ={<ProjectsDetails/>}/>
                    <Route path="/contacts" element ={<ContactsDetails/>}/>
                </Routes>
            <Footer/>
         </Box>
    )
}
export default App