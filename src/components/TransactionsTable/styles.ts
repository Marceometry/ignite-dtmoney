import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      color: var(--text-secondary);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--foreground);
      color: var(--text-secondary);

      &:first-child {
        border-radius: 5px 0 0 5px;
        color: var(--text);
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }

  .empty-table {
    display: grid;
    place-items: center;
    width: 100%;
  }
`
