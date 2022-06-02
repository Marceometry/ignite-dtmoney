import Modal from 'react-modal'
import closeIcon from '../../assets/close.svg'
import { Button } from '../Button'
import { Container } from './styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

Modal.setAppElement('#root')

export const TransactionModal = ({ isOpen, onClose }: ModalProps) => {
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

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />
        <input placeholder='Valor' type='number' />

        <input placeholder='Valor' type='number' />

        <Button type='submit' variant='green'>
          Cadastrar
        </Button>
      </Container>
    </Modal>
  )
}
