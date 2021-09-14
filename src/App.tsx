import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
