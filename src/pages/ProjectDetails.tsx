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
    title: 'Courseflix',
    description: 'This project consists of the development of a complete online course platform, designed to offer a seamless and secure learning experience for users and simplified content management for instructors. This robust and modern web application was built using a cutting-edge technology stack, demonstrating proficiency across the entire development cycle, from back-end design to the implementation of a reactive and intuitive user interface.',
    imageUrl: 'https://via.placeholder.com/800x400',
    technologies: ['React', 'Node.js', 'Express', 'Next.js', 'Mux', 'PostgreeSQL', 'PrismaORM', 'Stripe'],
  },
  {
    id: '2',
    title: 'DevBook',
    description: 'This project demonstrates the construction of a robust and efficient back-end for a social network, utilizing Go (Golang) to develop a complete RESTful API. The focus was on creating a high-performance server architecture capable of managing the fundamental operations of a social platform.',
    imageUrl: 'https://via.placeholder.com/800x400',
    technologies: ['Golang', 'MySQL', 'Bcrypt'],
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
