import { useTransactions } from '../../hooks/useTransactions';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import { Container, Card } from './styles';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, current) => {
      if (current.type === 'income') {
        accumulator.deposits += current.amount;
        accumulator.total += current.amount;
      } else {
        accumulator.withdraws += current.amount;
        accumulator.total -= current.amount;
      }

      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  );

  return (
    <Container>
      <Card>
        <header>
          <p>Income</p>
          <img src={Income} alt="Income icon" />
        </header>
        <h2>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </h2>
      </Card>
      <Card>
        <header>
          <p>Outcome</p>
          <img src={Outcome} alt="Outcome icon" />
        </header>
        <h2>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </h2>
      </Card>
      <Card green>
        <header>
          <p>Total</p>
          <img src={Total} alt="Total icon" />
        </header>
        <h2>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </h2>
      </Card>
    </Container>
  );
};
