import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
