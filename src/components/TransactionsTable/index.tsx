import { useTransactions } from '../../contexts'
import { Container } from './styles'

export const TransactionsTable = () => {
  const { transactionList } = useTransactions()

  return (
    <Container>
      {transactionList.length ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactionList.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {item.type === 'outcome' && '- '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(item.date))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='empty-table'>
          <h2>Não há transações</h2>
        </div>
      )}
    </Container>
  )
}
