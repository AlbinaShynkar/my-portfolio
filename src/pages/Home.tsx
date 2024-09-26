import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Container, Grid } from '@mui/material';

const Home: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Header />
      <Container>
        <h1>Welcome to My Portfolio</h1>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
