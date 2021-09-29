import { Summary } from 'components/Summary';
import { Wrapper } from 'components/Wrapper';
import { TransactionsTable } from 'components/TransactionsTable';

export const Dashboard = () => {
  return (
    <Wrapper>
      <Summary />
      <TransactionsTable />
    </Wrapper>
  );
};
