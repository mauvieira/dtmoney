import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: -60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`;

interface CardProps {
  green?: boolean;
}

export const Card = styled.div<CardProps>`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 4px;
  color: ${props => (props.green ? '#FFFFFF' : '#363F5F')};
  background: ${props => (props.green ? '#33CC95' : '#FFFFFF')};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: 500;
  }
`;
