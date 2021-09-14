import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

import { Wrapper } from '../Wrapper';
import { Button } from '../Button';

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <img src={Logo} alt="Logo dtmoney" />
          <Button onClick={() => console.log('click')}>new transaction</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};
