import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 5px;
    background: var(--foreground);
    border: none;

    &::placeholder {
      color: var(--text-secondary);
    }

    &:focus {
      outline: 1px solid var(--blue);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
  }
`
