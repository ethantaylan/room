import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './app-layout/app-layout';
import { Home } from './pages/home';

export const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
