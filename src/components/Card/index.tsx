import { Container } from './styles';

interface CardProps {
  card: {
    title: string;
    value: number;
  };
  // icon: any;
}

export const Card = ({ card }: CardProps) => {
  const { title, value } = card;
  return (
    <Container>
      <div>
        <span>{title}</span>
        <h3>{value}</h3>
      </div>
      {/* <div>{icon}</div> */}
    </Container>
  );
};
