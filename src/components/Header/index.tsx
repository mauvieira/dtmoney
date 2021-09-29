import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

import { Wrapper } from '../Wrapper';
import { Button } from '../Button';

interface HeaderProps {
  handleOpenModal: () => void;
}

export const Header = ({ handleOpenModal }: HeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <img src={Logo} alt="Logo dtmoney" />
          <Button onClick={handleOpenModal}>new transaction</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};
