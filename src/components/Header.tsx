import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  padding: 1.2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'};
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #61dafb;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    background: linear-gradient(90deg, #61dafb, #a64dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.nav<{ isOpen: boolean }>`
  display: flex;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: #1a1a1a;
    flex-direction: column;
    padding: 5rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    
    ${NavLink} {
      margin: 1rem 0;
      font-size: 1.2rem;
    }
  }
`;

const CloseMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo to="/">
        <span>André Gotardo Dev</span>
      </Logo>

      <MobileMenuButton onClick={() => setMenuOpen(true)}>
        {'☰'}
      </MobileMenuButton>

      <NavMenu isOpen={menuOpen} ref={navRef}>
        <CloseMenuButton onClick={() => setMenuOpen(false)}>✕</CloseMenuButton>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
};
