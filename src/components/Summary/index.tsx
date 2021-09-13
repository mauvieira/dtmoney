import { Card } from '../Card';
import { Wrapper } from '../Wrapper';
import { Container } from './styles';

export const Summary = () => {
  const cards = [
    {
      title: 'Entradas',
      value: 17400
    },
    {
      title: 'Saídas',
      value: 1259
    },
    {
      title: 'Total',
      value: 16141
    }
  ];

  return (
    <Wrapper>
      <Container>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </Container>
    </Wrapper>
  );
};
