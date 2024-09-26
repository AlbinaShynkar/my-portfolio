import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          Hi, I'm Albina Shynkar, a passionate developer with experience in [Your Skills]. I love creating web applications and learning new technologies.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;