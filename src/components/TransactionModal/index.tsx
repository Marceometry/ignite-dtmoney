import { useState } from 'react'
import Modal from 'react-modal'
import closeIcon from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../contexts'
import { Button } from '..'
import { Form, TransactionTypeButton, TransactionTypeContainer } from './styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

Modal.setAppElement('#root')

const emptyForm = {
  title: '',
  category: '',
  amount: '',
}

export const TransactionModal = ({ isOpen, onClose }: ModalProps) => {
  const { createTransaction } = useTransactions()
  const [transactionType, setTransactionType] = useState('income')
  const [newTransaction, setNewTransaction] = useState(emptyForm)

  const handleCloseModal = () => {
    onClose()
    setTransactionType('income')
    setNewTransaction(emptyForm)
  }

  const handleInputChange = (value: string | number, field: string) => {
    setNewTransaction((oldState) => ({
      ...oldState,
      [field]: value,
    }))
  }

  const handleCreateTransaction = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      ...newTransaction,
      amount: Number(newTransaction.amount),
      type: transactionType,
    }
    await createTransaction(data)
    handleCloseModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' className='react-modal-close' onClick={onClose}>
        <img src={closeIcon} alt='Fechar modal' />
      </button>

      <Form onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={newTransaction.title}
          onChange={(e) => handleInputChange(e.target.value, 'title')}
        />
        <input
          placeholder='Valor'
          type='number'
          min={0}
          value={newTransaction.amount}
          onChange={(e) => handleInputChange(e.target.value, 'amount')}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type='button'
            transactionType='income'
            active={transactionType === 'income'}
            onClick={() => setTransactionType('income')}
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type='button'
            transactionType='outcome'
            active={transactionType === 'outcome'}
            onClick={() => setTransactionType('outcome')}
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={newTransaction.category}
          onChange={(e) => handleInputChange(e.target.value, 'category')}
        />

        <Button type='submit' variant='green'>
          Cadastrar
        </Button>
      </Form>
    </Modal>
  )
}
