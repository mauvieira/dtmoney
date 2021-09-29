import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, title, amount, category, createdAt }) => (
            <tr key={id}>
              <td>{title}</td>
              <td className="income">$ {amount}</td>
              <td>{category}</td>
              <td>{createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
