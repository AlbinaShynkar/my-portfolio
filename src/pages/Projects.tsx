import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Projects: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6" component="h2">
                Project 1
              </Typography>
              <Typography variant="body1" component="p">
                Description of project 1.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6" component="h2">
                Project 2
              </Typography>
              <Typography variant="body1" component="p">
                Description of project 2.
              </Typography>
            </Paper>
          </Grid>
          {/* Add more projects as needed */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;