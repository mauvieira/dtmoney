import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      text-align: left;
      padding: 1rem 2rem;
    }

    td {
      background: var(--shape);
      color: var(--text-body);
      padding: 1rem 2rem;
      border-radius: 4px;

      &:first-child {
        color: var(--text-title);
      }
      &.income {
        color: var(--green);
      }
      &.outcome {
        color: var(--red);
      }
    }
  }
`;
