import { useTransactions } from 'hooks/useTransactions';
import { formatPriceValue } from 'util/formatPriceValue';
import Income from 'assets/income.svg';
import Outcome from 'assets/outcome.svg';
import Total from 'assets/total.svg';

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

  const { deposits, withdraws, total } = summary;

  return (
    <Container>
      <Card>
        <header>
          <p>Income</p>
          <img src={Income} alt="Income icon" />
        </header>
        <h2>{formatPriceValue(deposits)}</h2>
      </Card>
      <Card>
        <header>
          <p>Outcome</p>
          <img src={Outcome} alt="Outcome icon" />
        </header>
        <h2>{formatPriceValue(withdraws)}</h2>
      </Card>
      <Card green>
        <header>
          <p>Total</p>
          <img src={Total} alt="Total icon" />
        </header>
        <h2>{formatPriceValue(total)}</h2>
      </Card>
    </Container>
  );
};
