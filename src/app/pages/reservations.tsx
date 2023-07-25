import { AppLayout } from '../app-layout/app-layout';
import { SalleCard } from '../components/les-salles/salle-card';
import { useGlobalContext } from '../context/context';

export const Reservations = () => {
  const { cart } = useGlobalContext();

  return (
    <AppLayout>
      <h1 className="mt-20 text-xl font-bold">Vos réservations</h1>
      <SalleCard salle={cart} />
    </AppLayout>
  );
};
