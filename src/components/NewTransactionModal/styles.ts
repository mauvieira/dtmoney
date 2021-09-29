import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
  }

  input {
    padding: 1.2rem 1.5rem;
    display: block;
    width: 100%;
    border: 1px solid #d7d7d7;
    background: ${transparentize(0.4, '#e7e9ee')};
    border-radius: 5px;
    color: var(--text-body);
    transition: border-color 0.3s ease-in;

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
  }
`;

export const SubmitButton = styled.button`
  background: var(--green);
  color: var(--shape);
  display: block;
  width: 100%;
  padding: 20px;
  font-weight: 600;
  margin-top: 1rem;
  border-radius: 5px;
  transition: filter 0.3s ease-in;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#12A454',
  red: '#E62E4D'
};

export const RadioButton = styled.div<RadioButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  padding: 1rem;
  border-radius: 5px;
  background: ${props =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : '#f0f2f5'};
  transition: border-color 0.3s ease-in;

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`;
