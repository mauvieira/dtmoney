import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect
} from 'react';
import { api } from '../../services/api';

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

interface TransactionsContextProps {
  loading: boolean;
  transactions: Transaction[];
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
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <TransactionsContext.Provider value={{ transactions, loading }}>
      {children}
    </TransactionsContext.Provider>
  );
};
