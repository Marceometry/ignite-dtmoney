import { useState } from 'react'
import { Dashboard, Header, TransactionModal } from './components'
import { GlobalStyle } from './styles/global'

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  const handleOpenTransactionModal = () => setIsTransactionModalOpen(true)

  const handleCloseTransactionModal = () => setIsTransactionModalOpen(false)

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}
