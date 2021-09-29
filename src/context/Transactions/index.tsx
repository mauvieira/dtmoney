import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect
} from 'react';
import { api } from 'services/api';

interface TransactionsStoreProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionHandler {
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

interface TransactionsContextProps {
  loading: boolean;
  transactions: Transaction[];
  addTransaction: (data: TransactionHandler) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export const TransactionsStore = ({ children }: TransactionsStoreProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [loading, setLoading] = useState(false);

  const getTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { transactions }
      } = await api.get('/transactions');
      setTransactions(() => transactions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTransaction = useCallback(async (data: TransactionHandler) => {
    const {
      data: { transaction }
    } = await api.post('/transactions', data);
    setTransactions(transactions => [...transactions, transaction]);
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, loading, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
