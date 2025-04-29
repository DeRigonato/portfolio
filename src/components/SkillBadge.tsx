import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
  color: #e0e0e0;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  margin: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #333 0%, #444 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

interface SkillBadgeProps {
  skill: string;
  icon?: React.ReactElement | null;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, icon }) => {
  return (
    <Badge>
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {skill}
    </Badge>
  );
};