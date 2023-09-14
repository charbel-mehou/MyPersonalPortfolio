import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TitleHeader = () => {
    const { t } = useTranslation();

  const [text, setText] = useState('me-5');
  const textOptions = ['me-5', 'me-5-1'];
  let index = 0;

  const changeText = () => {
    setText(textOptions[index]);
    index = (index + 1) % textOptions.length;
  };

  useEffect(() => {
    const interval = setInterval(changeText, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
<Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexWrap: { xs: 'wrap', lg: 'nowrap' },
        gap: 2,
        mb: 2,
      }}
    >
      <Typography variant="h5">{t('me-4')}</Typography>
      <Typography variant="h3" fontFamily="cursive"  sx={{ color: '#416DD1' }}><span className="text sec-text"> {t(text)}</span>
      </Typography>
    </Box>
  );
};

export default TitleHeader;
