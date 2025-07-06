import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #61dafb, #a64dff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #b3b3b3;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, #61dafb, #4fa8d1);
  color: #0d0d0d;
  padding: 0.7rem 1.2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(97, 218, 251, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(97, 218, 251, 0.4);
  }
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl,
  githubUrl 
}) => {
  return (
    <Card>
      <ProjectImage imageUrl={imageUrl} />
      <ContentWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <Divider />
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonsWrapper>
          <ViewButton to={`/project/${id}`}>View Details</ViewButton>
          {githubUrl && (
            <GithubLink href={githubUrl} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </GithubLink>
          )}
        </ButtonsWrapper>
      </ContentWrapper>
    </Card>
  );
};
