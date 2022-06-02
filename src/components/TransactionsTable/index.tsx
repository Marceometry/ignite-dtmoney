import { Container } from './styles'

export const TransactionsTable = () => {
  return (
    <Container>
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
          <tr>
            <td>Bateria</td>
            <td className='outcome'>- R$ 4.200</td>
            <td>Música</td>
            <td>31/05/2022</td>
          </tr>
          <tr>
            <td>Pratos hit-hat</td>
            <td className='income'>R$ 50</td>
            <td>Música</td>
            <td>22/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
