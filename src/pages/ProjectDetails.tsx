import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';

const ProjectContainer = styled.div`
  padding: 8rem 5% 2rem;
  background: #0d0d0d;
  color: white;
  min-height: 100vh;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 2rem;
  
  &:hover {
    background: #444;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ProjectDescription = styled.div`
  max-width: 800px;
  line-height: 1.6;
`;

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: '1',
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform built with React and Node.js. Features include product listings, shopping cart, user authentication, and payment processing.',
    imageUrl: 'https://via.placeholder.com/800x400',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects. Users can create, organize, and track their tasks with features like due dates, priorities, and categories.',
    imageUrl: 'https://via.placeholder.com/800x400',
    technologies: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my work and skills. Built with modern web technologies and featuring a clean, minimalist design.',
    imageUrl: 'https://via.placeholder.com/800x400',
    technologies: ['React', 'Styled Components', 'Framer Motion'],
  },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <>
        <Header />
        <ProjectContainer>
          <BackButton to="/">Back to Home</BackButton>
          <h1>Project not found</h1>
        </ProjectContainer>
      </>
    );
  }
  
  return (
    <>
      <Header />
      <ProjectContainer>
        <BackButton to="/">Back to Home</BackButton>
        <ProjectTitle>{project.title}</ProjectTitle>
        <div>
          {project.technologies.map(tech => (
            <span key={tech} style={{ marginRight: '10px', background: '#333', padding: '5px 10px', borderRadius: '4px' }}>
              {tech}
            </span>
          ))}
        </div>
        <ProjectImage src={project.imageUrl} alt={project.title} />
        <ProjectDescription>
          <p>{project.description}</p>
        </ProjectDescription>
      </ProjectContainer>
    </>
  );
};

export default ProjectDetails;
