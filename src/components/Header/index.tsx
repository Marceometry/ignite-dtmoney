import logo from '../../assets/logo.svg'
import { Button } from '..'
import { Container, Content } from './styled'

type HeaderProps = {
  onOpenTransactionModal: () => void
}

export const Header = ({ onOpenTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt='dtmoney' />
        <Button onClick={onOpenTransactionModal}>Nova transação</Button>
      </Content>
    </Container>
  )
}
