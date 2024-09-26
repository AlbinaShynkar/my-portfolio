import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography variant="body2" align="center" sx={{ padding: '20px 0' }}>
        © {new Date().getFullYear()} Albina Shynkar
      </Typography>
    </Container>
  );
};

export default Footer;
