import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CsharpLogo from '../assets/icons/csharp-icon.png';
import HmtlLogo from '../assets/icons/html-icon.png';
import JsLogo from '../assets/icons/js-icon.png';
import PhpLogo from '../assets/icons/php-icon.png';
import ReactLogo from '../assets/icons/react-icon.png';
import TypeScriptLogo from '../assets/icons/typescript-icon.png';

const SkillsDetails = () => {
  const {t}=useTranslation()
  const skillstab = [
    { logo: CsharpLogo, label: 'C#' },
    { logo: ReactLogo, label: 'React' },
    { logo: JsLogo, label: 'JavaScript' },
    { logo: TypeScriptLogo, label: 'TypeScript' },
    { logo: PhpLogo, label: 'Php' },
    { logo: HmtlLogo, label: 'Html' },
  ];
  return (
    <Box 
    id="skills" 
    sx={{ display: "flex", flexDirection: 'column',mt:2}}
    >
      <Box className="title-box">
      <Typography variant='h5' className='title'> {t('skills')}</Typography>
      </Box>
      <Box className="bg-slate-900 bg-opacity-70 skills-box" 
      sx={{display: 'flex', 
              flexDirection: 'row',
              flexWrap:{xs:'wrap',lg:'nowrap'}
              }} >
          {skillstab.map((skill, index) => (
            <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent:'center',
              alignItems:'center',
            }}
            >
                  <img style={{width: "50px", height: "50px" }}src={skill.logo} alt={skill.label} />
                  <Typography style={{ color: "white" }}>{skill.label}</Typography>
              </Box>
          ))}
    </Box>
</Box>

  );
};

export default SkillsDetails;
