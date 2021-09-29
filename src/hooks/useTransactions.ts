import { useContext } from 'react';
import { TransactionsContext } from '../context/Transactions';

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
