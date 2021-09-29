import { useEffect, useState, useCallback } from 'react';
import { api } from '../../services/api';
import { Summary } from '../../components/Summary';
import { Wrapper } from '../../components/Wrapper';
import { TransactionsTable } from '../../components/TransactionsTable';

export const Dashboard = () => {
  const [_, setTransactions] = useState([]);

  const getData = useCallback(async () => {
    const { data } = await api.get('/transactions');
    setTransactions(() => data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Wrapper>
      <Summary />
      <TransactionsTable />
    </Wrapper>
  );
};
