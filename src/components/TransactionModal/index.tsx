import { useState } from 'react'
import Modal from 'react-modal'
import closeIcon from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Button } from '../Button'
import { Form, TransactionTypeButton, TransactionTypeContainer } from './styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

Modal.setAppElement('#root')

export const TransactionModal = ({ isOpen, onClose }: ModalProps) => {
  const [transactionType, setTransactionType] = useState('income')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' className='react-modal-close' onClick={onClose}>
        <img src={closeIcon} alt='Fechar modal' />
      </button>

      <Form>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />
        <input placeholder='Valor' type='number' />

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

        <input placeholder='Categoria' />

        <Button type='submit' variant='green'>
          Cadastrar
        </Button>
      </Form>
    </Modal>
  )
}
