import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';
import { AboutUs } from './pages/about-us';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notFound';
import { GlobalContextProvider } from './context/context';
import { AuthProvider } from './provider/auth';
import { Administration } from './admin/administration';
import { Guard } from './guard/guard';
import {
  AdministrationRoutes,
  administrationRoutes
} from './admin/components/administration-navbar';

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
              path="/administration"
              element={
                <Guard>
                  <Administration />
                </Guard>
              }
            />
            {administrationRoutes.map(
              (route: AdministrationRoutes, index: number) => (
                <Route
                  key={index}
                  path={route.href}
                  element={
                    <Guard>
                      <Administration
                        children={route.element}
                        title={route.title}
                      />
                    </Guard>
                  }
                />
              )
            )}
          </Routes>
        </AuthProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};
