import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import { Container, Card } from './styles';

export const Summary = () => {
  // const cards = [
  //   {
  //     title: 'Entradas',
  //     value: 17400
  //   },
  //   {
  //     title: 'Saídas',
  //     value: 1259
  //   },
  //   {
  //     title: 'Total',
  //     value: 16141
  //   }
  // ];

  return (
    <Container>
      <Card>
        <header>
          <p>Income</p>
          <img src={Income} alt="Income icon" />
        </header>
        <h2>R$ 17,400,00</h2>
      </Card>
      <Card>
        <header>
          <p>Outcome</p>
          <img src={Outcome} alt="Outcome icon" />
        </header>
        <h2>R$ 1.259,00</h2>
      </Card>
      <Card green>
        <header>
          <p>Total</p>
          <img src={Total} alt="Total icon" />
        </header>
        <h2>R$ 16.141,00</h2>
      </Card>
    </Container>
  );
};
