import logo from '../../assets/logo.svg'
import { Button } from '..'
import { Container, Content } from './styled'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt='dtmoney' />
        <Button>Nova transação</Button>
      </Content>
    </Container>
  )
}
