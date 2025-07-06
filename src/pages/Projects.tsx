import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

const PageContainer = styled.div`
  background: #0d0d0d;
  color: white;
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding: 8rem 5% 4rem;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #61dafb, transparent);
    margin: 1rem auto 3rem;
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ProjectsPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </ProjectsGrid>
      </MainContent>
    </PageContainer>
  );
};

export default ProjectsPage;
