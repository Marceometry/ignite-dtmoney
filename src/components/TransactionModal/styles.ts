import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Form = styled.form`
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

type TransactionTypeButtonProps = {
  active: boolean
  transactionType: 'income' | 'outcome'
}

const buttonColors = {
  income: '#33CC95',
  outcome: '#FF5B77',
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  height: 4rem;
  border-radius: 5px;
  border: 1px solid var(--foreground);
  background-color: ${({ active, transactionType }) =>
    active
      ? transparentize(0.8, buttonColors[transactionType])
      : 'transparent'};
  transition: border-color, background-color, 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.05, '#2e2e31')};
  }

  &:focus {
    outline: 1px solid ${({ transactionType }) => buttonColors[transactionType]};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    color: var(--title);
  }
`
