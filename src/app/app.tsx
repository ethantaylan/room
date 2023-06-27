import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';
import { AboutUs } from './pages/about-us';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/les-salles" element={<LesSalles />} />
        <Route path="/qui-sommes-nous" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
