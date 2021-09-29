import { useState, FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from 'react-modal';
// import { api } from '../../services/api';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Close from '../../assets/close.svg';
import {
  Container,
  SubmitButton,
  RadioButton,
  RadioWrapper,
  CloseButton
} from './styles';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F0F2F5',
    maxWidth: '576px',
    width: '90%',
    padding: '64px 48px'
  }
};

interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  handleCloseModal
}: ModalProps) => {
  const [type, setType] = useState('income');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { addTransaction } = useTransactions();

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await addTransaction({
      title,
      type,
      category,
      amount,
      createdAt: new Date()
    });

    handleCloseModal();
    setTitle('');
    setAmount(0);
    setCategory('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <CloseButton onClick={handleCloseModal}>
        <img src={Close} alt="Close Icon" />
      </CloseButton>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add a new transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <RadioWrapper>
          <RadioButton
            isActive={type === 'income'}
            activeColor="green"
            onClick={() => setType('income')}
          >
            <img src={Income} alt="Income icon" />
            Income
          </RadioButton>
          <RadioButton
            isActive={type === 'outcome'}
            activeColor="red"
            onClick={() => setType('outcome')}
          >
            <img src={Outcome} alt="Outcome icon" />
            Outcome
          </RadioButton>
        </RadioWrapper>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <SubmitButton type="submit">Create</SubmitButton>
      </Container>
    </Modal>
  );
};
