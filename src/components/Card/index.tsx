import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { SummaryItem } from '../../types'
import { Container } from './styles'

const images = {
  income: incomeImg,
  outcome: outcomeImg,
  total: totalImg,
}

type CardProps = {
  data: SummaryItem
}

export const Card = ({ data }: CardProps) => {
  const { type, value } = data

  const title =
    type === 'income' ? 'Entradas' : type === 'outcome' ? 'Saídas' : 'Total'

  const image = images[type]

  return (
    <Container isTotal={type === 'total'} isNegative={value < 0}>
      <header>
        <p>{title}</p>
        <img src={image} alt={title} />
      </header>
      <strong>
        {(type === 'outcome' || (type === 'total' && value < 0)) && '- '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Math.abs(value))}
      </strong>
    </Container>
  )
}
