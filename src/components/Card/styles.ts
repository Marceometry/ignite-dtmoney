import styled from 'styled-components'

type ContainerProps = {
  isTotal: boolean
  isNegative: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 1.5rem 2rem;
  border-radius: 5px;
  transition: background-color, 0.2s;
  color: ${({ isTotal }) => (!isTotal ? 'var(--title)' : 'var(--foreground)')};
  background-color: ${({ isTotal, isNegative }) =>
    !isTotal
      ? 'var(--foreground)'
      : isNegative
      ? 'var(--red)'
      : 'var(--green)'};

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
