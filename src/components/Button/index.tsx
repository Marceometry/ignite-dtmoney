import { StyledButton } from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'blue' | 'green'
}

export const Button = ({
  children,
  variant = 'blue',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
