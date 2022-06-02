import { Card } from '..'
import { SummaryItem } from '../../types'
import { Container } from './styles'

const data: SummaryItem[] = [
  {
    type: 'income',
    value: 3000,
  },
  {
    type: 'outcome',
    value: 1000,
  },
  {
    type: 'total',
    value: 2000,
  },
]

export const Summary = () => {
  return (
    <Container>
      {data.map((item) => (
        <Card data={item} />
      ))}
    </Container>
  )
}
