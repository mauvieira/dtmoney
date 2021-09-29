import { useEffect, useState, useCallback } from 'react';
import { api } from '../../services/api';
import { Summary } from '../../components/Summary';
import { Wrapper } from '../../components/Wrapper';
import { TransactionsTable } from '../../components/TransactionsTable';

export const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const getData = useCallback(async () => {
    const {
      data: { transactions }
    } = await api.get('/transactions');
    setTransactions(() => transactions);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Wrapper>
      <Summary />
      <TransactionsTable transactions={transactions} />
    </Wrapper>
  );
};
