import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 5px;
  background: var(--foreground);
  color: var(--title);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
    display: block;
  }
`
