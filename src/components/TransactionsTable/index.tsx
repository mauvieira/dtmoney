import { useTransactions } from '../../hooks/useTransactions';
import { formatDate } from '../../util/formatDate';
import { formatPriceValue } from '../../util/formatPriceValue';

import { Container } from './styles';

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

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
          {transactions.map(
            ({ id, title, type, amount, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>{formatPriceValue(amount)}</td>
                <td>{category}</td>
                <td>{formatDate(createdAt)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
};
