import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { SkillBadge } from '../components/SkillBadge';
import { projects } from '../data/projects';
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeJsIcon,
  GitHubIcon,
  LinkedInIcon,
  GolangIcon,
  PhpIcon
} from '../components/Icons';

// Hero Section com animação e design mais moderno
const HeroSection = styled.section`
  min-height: 100vh;
  padding: 8rem 5% 4rem;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(97, 218, 251, 0.1) 0%, transparent 70%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 6rem 5% 3rem;
  }
`;

// Título com destaque visual
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff, #61dafb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

// Subtítulo mais profissional
const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #e0e0e0;
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Botões de ação para contato e currículo
const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #61dafb, #4fa8d1);
  color: #0d0d0d;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(97, 218, 251, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(97, 218, 251, 0.4);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid #61dafb;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(97, 218, 251, 0.1);
    transform: translateY(-3px);
  }
`;

// Seção de projetos com design mais moderno
const ProjectsSection = styled.section`
  padding: 6rem 5%;
  background: #121212;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
`;

// Título de seção com destaque visual
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

const SectionSubtitle = styled.p`
  text-align: center;
  color: #b3b3b3;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

// Grid de projetos mais organizado
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Nova seção de habilidades
const SkillsSection = styled.section`
  padding: 6rem 5%;
  background: #0d0d0d;
  position: relative;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

// Nova seção de contato
const ContactSection = styled.section`
  padding: 6rem 5%;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2a2a2a;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: #61dafb;
    color: #0d0d0d;
  }
`;

// Animação para elementos que aparecem ao rolar
const FadeInSection = styled.div<{ isVisible: boolean }>`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? 0 : '30px')});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;



// Lista de habilidades com ícones
const skills = [
  { name: 'React', icon: <ReactIcon />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <TypeScriptIcon />, color: '#3178C6' },
  { name: 'JavaScript', icon: <JavaScriptIcon />, color: '#F7DF1E', textColor: '#000000' },
  { name: 'Node.js', icon: <NodeJsIcon />, color: '#339933' },
  { name: 'HTML5', icon: null, color: '#E34F26' },
  { name: 'CSS3', icon: null, color: '#1572B6' },
  { name: 'Golang', icon: <GolangIcon />, color: '#00ADD8' },
  { name: 'PHP', icon: <PhpIcon />, color: '#777BB4' },
  { name: 'MongoDB', icon: null, color: '#47A248' },
  { name: 'PostgreSQL', icon: null, color: '#336791' },
  { name: 'Git', icon: null, color: '#F05032' },
  { name: 'Rest API', icon: null, color: '#000000' },
];

const Home: React.FC = () => {
  // Refs para animações de scroll
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Estados para controlar visibilidade
  const [skillsVisible, setSkillsVisible] = React.useState(false);
  const [projectsVisible, setProjectsVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  // Efeito para detectar quando elementos entram na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === skillsRef.current) {
            setSkillsVisible(entry.isIntersecting);
          } else if (entry.target === projectsRef.current) {
            setProjectsVisible(entry.isIntersecting);
          } else if (entry.target === contactRef.current) {
            setContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection id="about">
          <Title>André Gotardo</Title>
          <Subtitle>
            Full Stack Developer passionate about creating elegant, efficient, and user-friendly
            web applications with modern technologies like React, TypeScript, Golang and Node.js.
          </Subtitle>
          <ActionButtons>
            <PrimaryButton href="#contact">Contact Me</PrimaryButton>
            <SecondaryButton href="/CurriculoDev.pdf" target="_blank">Download CV</SecondaryButton>
          </ActionButtons>
        </HeroSection>

        <SkillsSection id="skills">
          <div ref={skillsRef}>
            <FadeInSection isVisible={skillsVisible}>
              <SectionTitle>My Skills</SectionTitle>
              <SectionSubtitle>
                Technologies and tools I've been working with recently
              </SectionSubtitle>
              <SkillsContainer>
                {skills.map(skill => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    textColor={skill.textColor}
                  />
                ))}
              </SkillsContainer>
            </FadeInSection>
          </div>
        </SkillsSection>

        <ProjectsSection id="projects">
          <div ref={projectsRef}>
            <FadeInSection isVisible={projectsVisible}>
              <SectionTitle>Featured Projects</SectionTitle>
              <SectionSubtitle>
                A selection of my recent work and personal projects
              </SectionSubtitle>
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
            </FadeInSection>
          </div>
        </ProjectsSection>

        <ContactSection id="contact">
          <div ref={contactRef}>
            <FadeInSection isVisible={contactVisible}>
              <SectionTitle>Get In Touch</SectionTitle>
              <SectionSubtitle>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </SectionSubtitle>
              <PrimaryButton href="mailto:al.g.regonato@gmail.com">
                Send Email
              </PrimaryButton>
              <SocialLinks>
                <SocialLink href="https://github.com/DeRigonato" target="_blank" aria-label="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/andr%C3%A9-rigonato-91979727b/" target="_blank" aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
              </SocialLinks>
            </FadeInSection>
          </div>
        </ContactSection>
      </main>
    </>
  );
};

export default Home;
