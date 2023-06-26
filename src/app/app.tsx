import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';
import { AboutUs } from './pages/about-us';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/les-salles" element={<LesSalles />} />
        <Route path="/qui-sommes-nous" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
