import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <Container {...props}>{children}</Container>
);
