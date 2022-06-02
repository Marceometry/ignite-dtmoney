import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  color: #fff;
  background-color: var(--blue-light);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`
