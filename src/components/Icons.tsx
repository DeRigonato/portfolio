import React from 'react';
import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiGo } from 'react-icons/si';

// Componente genérico para renderizar qualquer ícone
export const IconWrapper = ({ Icon }: { Icon: IconType }): React.ReactElement => {
  // Usando o operador de asserção de tipo para resolver o problema de tipagem
  return React.createElement(Icon as React.ComponentType<{}>);
};

// Componentes wrapper para os ícones específicos
export const ReactIcon = (): React.ReactElement => <IconWrapper Icon={FaReact} />;
export const TypeScriptIcon = (): React.ReactElement => <IconWrapper Icon={SiTypescript} />;
export const JavaScriptIcon = (): React.ReactElement => <IconWrapper Icon={SiJavascript} />;
export const NodeJsIcon = (): React.ReactElement => <IconWrapper Icon={FaNodeJs} />;
export const GitHubIcon = (): React.ReactElement => <IconWrapper Icon={FaGithub} />;
export const LinkedInIcon = (): React.ReactElement => <IconWrapper Icon={FaLinkedin} />;
export const EnvelopeIcon = (): React.ReactElement => <IconWrapper Icon={FaEnvelope} />;
export const PhoneIcon = (): React.ReactElement => <IconWrapper Icon={FaPhone} />;
export const WhatsappIcon = (): React.ReactElement => <IconWrapper Icon={FaWhatsapp} />;

// Adicione os novos ícones
export const GolangIcon = (): React.ReactElement => <IconWrapper Icon={SiGo} />;
export const PhpIcon = (): React.ReactElement => <IconWrapper Icon={FaPhp} />;