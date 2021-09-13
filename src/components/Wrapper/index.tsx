import { ReactNode } from 'react';
import { Container } from './styles';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};
