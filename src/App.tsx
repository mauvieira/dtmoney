import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(() => true);

  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(() => false);

  return (
    <>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        handleCloseModal={handleCloseNewTransactionModal}
      />
      <Header handleOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
