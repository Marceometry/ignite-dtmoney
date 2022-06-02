import { StyledButton } from './styles'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton type='button'>{children}</StyledButton>
}
