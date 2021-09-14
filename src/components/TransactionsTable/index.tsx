import { Container } from './styles';

export const TransactionsTable = () => {
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
          <tr>
            <td>Website development</td>
            <td className="income">$ 12.000,00</td>
            <td>Sell</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td className="outcome">- $ 59,00</td>
            <td>Food</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="outcome">- $ 1.200,00</td>
            <td>House</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Computer</td>
            <td className="income">$ 5.400,00</td>
            <td>Sell</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
