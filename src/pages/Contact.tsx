import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  WhatsappIcon 
} from '../components/Icons';
import emailjs from '@emailjs/browser';

// Container principal da página
const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  color: white;
  padding: 8rem 5% 4rem;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff, #61dafb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactFormSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ContactInfoSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #e0e0e0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #61dafb;
    box-shadow: 0 0 0 2px rgba(97, 218, 251, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #61dafb;
    box-shadow: 0 0 0 2px rgba(97, 218, 251, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #61dafb, #4fa8d1);
  color: #0d0d0d;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(97, 218, 251, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(97, 218, 251, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #61dafb;
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #61dafb;
  }
`;

const ContactInfoText = styled.div`
  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #61dafb;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: #61dafb;
    color: #0d0d0d;
  }
`;

const FormStatus = styled.div<{ isError?: boolean }>`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  text-align: center;
  background: ${props => props.isError ? 'rgba(255, 87, 87, 0.2)' : 'rgba(97, 218, 251, 0.2)'};
  color: ${props => props.isError ? '#ff5757' : '#61dafb'};
  border: 1px solid ${props => props.isError ? '#ff5757' : '#61dafb'};
`;

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; isError: boolean } | null>(null);
  
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Substitua com suas credenciais do EmailJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current!, 
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        setFormStatus({
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
          isError: false
        });
        // Limpar o formulário
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        setFormStatus({
          message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
          isError: true
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Header />
      <ContactContainer>
        <ContactTitle>Entre em Contato</ContactTitle>
        <ContactSubtitle>
          Estou sempre aberto a novas oportunidades, colaborações e conversas. 
          Sinta-se à vontade para entrar em contato comigo por qualquer um dos meios abaixo.
        </ContactSubtitle>
        
        <ContactContent>
          <ContactFormSection>
            <ContactForm ref={form} onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Assunto</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Mensagem</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </SubmitButton>
              
              {formStatus && (
                <FormStatus isError={formStatus.isError}>
                  {formStatus.message}
                </FormStatus>
              )}
            </ContactForm>
          </ContactFormSection>
          
          <ContactInfoSection>
            <ContactInfoCard>
              <ContactInfoTitle>Informações de Contato</ContactInfoTitle>
              
              <ContactInfoList>
                <ContactInfoItem>
                  <EnvelopeIcon />
                  <ContactInfoText>
                    <a href="mailto:al.g.regonato@gmail.com">al.g.regonato@gamil.com</a>
                  </ContactInfoText>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <PhoneIcon />
                  <ContactInfoText>
                    <a href="tel:+5511991342327">+55 (11) 99134-2327</a>
                  </ContactInfoText>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <WhatsappIcon />
                  <ContactInfoText>
                    <a href="https://wa.me/5511991342327" target="_blank" rel="noopener noreferrer">
                      WhatsApp: +55 (11) 99134-2327
                    </a>
                  </ContactInfoText>
                </ContactInfoItem>
              </ContactInfoList>
              
              <ContactInfoTitle>Redes Sociais</ContactInfoTitle>
              <SocialLinks>
                <SocialLink href="https://github.com/andregotardo" target="_blank" aria-label="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/andregotardo" target="_blank" aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
              </SocialLinks>
            </ContactInfoCard>
          </ContactInfoSection>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;