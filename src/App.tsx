import { useState } from 'react'
import { Dashboard, Header, TransactionModal } from './components'
import { TransactionsContextProvider } from './contexts'
import { GlobalStyle } from './styles'

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  const handleOpenTransactionModal = () => setIsTransactionModalOpen(true)

  const handleCloseTransactionModal = () => setIsTransactionModalOpen(false)

  return (
    <TransactionsContextProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContextProvider>
  )
}
