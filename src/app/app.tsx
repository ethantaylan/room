import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';
import { AboutUs } from './pages/about-us';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notFound';
import { GlobalContextProvider } from './context/context';
import { AuthProvider } from './provider/auth';
import { Administration } from './pages/admin/administration';
import { Guard } from './guard/guard';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/les-salles" element={<LesSalles />} />
            <Route path="/qui-sommes-nous" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            {/* Routes that require admin access */}
            <Route
              path="/gestion-des-salles"
              element={
                <Guard>
                  <Administration />
                </Guard>
              }
            />
          </Routes>
        </AuthProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};
