import styled from 'styled-components'
import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: filter 0.2s;
  color: #fff;
  background-color: ${({ variant }) =>
    variant === 'green' ? 'var(--green)' : 'var(--blue-light)'};
  font-weight: ${({ variant }) => (variant === 'green' ? 600 : 400)};

  &:focus {
    outline: 1px solid var(--red);
  }

  &:hover {
    filter: ${({ variant }) =>
      variant === 'green' ? 'brightness(0.8)' : 'brightness(1.1)'};
  }
`
