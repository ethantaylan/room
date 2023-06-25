import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/les-salles" element={<LesSalles />} />
      </Routes>
    </BrowserRouter>
  );
};
