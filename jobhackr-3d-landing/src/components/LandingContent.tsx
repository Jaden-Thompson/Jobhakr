import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #00ffcc;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #00ffcc;
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 5px #00ffcc;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #000;
  background-color: #00ffcc;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc99;
  }
`;

const LandingContent: React.FC = () => {
  return (
    <Container>
      <Headline>Hack Your Next Job Application</Headline>
      <Subheadline>Paste a job post — get the perfect response in seconds</Subheadline>
      <Button to="/generator">Get Started</Button>
    </Container>
  );
};

export default LandingContent;