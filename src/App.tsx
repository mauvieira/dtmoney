import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsStore } from './context/Transactions';

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(() => true);

  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(() => false);

  return (
    <TransactionsStore>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        handleCloseModal={handleCloseNewTransactionModal}
      />
      <Header handleOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
    </TransactionsStore>
  );
};
