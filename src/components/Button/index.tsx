import { ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <Container>{children}</Container>
);
