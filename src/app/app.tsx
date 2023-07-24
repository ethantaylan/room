import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Administration } from './admin/administration';
import {
  AdministrationRoutes,
  administrationRoutes
} from './admin/components/administration-navbar';
import { GlobalContextProvider } from './context/context';
import { Guard } from './guard/guard';
import { AboutUs } from './pages/about-us';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { LesSalles } from './pages/les-salles';
import { Login } from './pages/login';
import { NotFound } from './pages/notFound';
import { Profil } from './pages/profil';
import { AuthProvider } from './provider/auth';
import { Register } from './pages/register';
import { AJouterUnNouveauMembre } from './admin/pages/membres/ajouter-un-nouveau-membres';
import { AppLayout } from './app-layout/app-layout';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="dev-20cf07b3bhdhpvv1.us.auth0.com"
        clientId="9pU2xEY2Y2DkXnxIwHmaOSdfm7O65Uht"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <GlobalContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accueil" element={<Home />} />
              <Route path="/les-salles" element={<LesSalles />} />
              <Route path="/qui-sommes-nous" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/register"
                element={
                  <AppLayout>
                    <Register forAdminPage={false} />
                  </AppLayout>
                }
              />

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
              <Route
                path="/administration/ajouter-un-nouveau-membre"
                element={
                  <Guard>
                    <AJouterUnNouveauMembre />
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
      </Auth0Provider>
    </BrowserRouter>
  );
};
