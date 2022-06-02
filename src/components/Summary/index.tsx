import { useMemo } from 'react'
import { useTransactions } from '../../contexts'
import { SummaryItem } from '../../types'
import { Card } from '..'
import { Container } from './styles'

export const Summary = () => {
  const { transactionList } = useTransactions()

  const [income, outcome, total] = useMemo(() => {
    const summary = transactionList.reduce(
      (values, item) => {
        const amount = Number(item.amount)
        if (item.type === 'income') return [values[0] + amount, values[1]]
        return [values[0], values[1] + amount]
      },
      [0, 0]
    )
    return [...summary, summary[0] - summary[1]]
  }, [transactionList])

  const data: SummaryItem[] = [
    {
      type: 'income',
      value: income,
    },
    {
      type: 'outcome',
      value: outcome,
    },
    {
      type: 'total',
      value: total,
    },
  ]

  return (
    <Container>
      {data.map((item) => (
        <Card data={item} />
      ))}
    </Container>
  )
}
