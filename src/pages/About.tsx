import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const AboutContainer = styled.div`
  background: #0d0d0d;
  color: white;
  min-height: 100vh;
  padding: 8rem 5% 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  line-height: 1.8;
  font-size: 1.1rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #61dafb;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #61dafb;
      position: absolute;
      left: 0;
    }
  }

  strong {
    color: #61dafb;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 2rem 0;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Header />
      <ContentWrapper>
        <h1>About Me</h1>

        <p>
          Hi, I'm André! A passionate and dedicated Software Development student focused on creating high-impact solutions with <strong>Full-Stack</strong> and <strong>Back-End</strong> technologies. My goal is to build a solid career by developing robust, efficient, and scalable applications that meet modern market demands.
        </p>

        <hr />

        <h3>My Tech Stack & Skills</h3>
        <ul>
          <li><strong>Back-End:</strong> Proficient in developing server-side logic using <strong>Golang, Node.js, and PHP</strong>.</li>
          <li><strong>Front-End:</strong> Experience in building responsive and dynamic user interfaces with <strong>HTML, CSS, and React</strong>.</li>
          <li><strong>Databases:</strong> Skilled in working with both relational (<strong>SQL</strong>) and non-relational (<strong>MongoDB</strong>) databases.</li>
          <li><strong>Principles:</strong> Strong understanding of <strong>RESTful APIs, Git version control, Clean Code, software architecture principles, and testing best practices</strong>.</li>
        </ul>

        <hr />

        <h3>My Motivation</h3>
        <p>
          I thrive on challenges and am driven by a passion for problem-solving and continuous learning. I am currently deepening my knowledge in <strong>Cloud Computing (AWS)</strong> and <strong>Microservices architecture</strong> to enhance my ability to build modern, distributed systems.
        </p>

        <hr />

        <h3>What I'm Looking For</h3>
        <ul>
          <li>Collaborate with agile teams on innovative and impactful projects.</li>
          <li>Apply and expand my skills in scalable software development.</li>
          <li>Grow professionally by learning from experienced mentors and developers.</li>
        </ul>

        <hr />

        <h3>Current Projects & Endeavors</h3>
        <ul>
          <li>I am completing my degree in <strong>Systems Analysis and Development</strong> at Estácio.</li>
          <li>I am building a full-featured e-learning platform from scratch using <strong>React and Node.js</strong>.</li>
          <li>I am also developing an e-commerce website with a classic stack of <strong>HTML/CSS, JavaScript, and PHP</strong>.</li>
        </ul>

        <p>
          Feel free to connect! I'm always open to networking, mentorship, and tech conversations. Let's code the future together! ✨
        </p>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
