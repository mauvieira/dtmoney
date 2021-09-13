import styled from 'styled-components';

export const Container = styled.button`
  color: var(--shape);
  background: var(--blue-light);
  display: block;
  width: 195px;
  text-align: center;
  padding: 12px 0;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  cursor: pointer;
  transition: filter 0.3s ease-in;

  &:hover {
    filter: brightness(0.9);
  }
`;
