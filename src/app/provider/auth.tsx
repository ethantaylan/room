import React, { PropsWithChildren } from 'react';
import { supabase } from '../config';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ready, setIsReady] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<[]>([]);

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    console.log(user);

    user && setIsReady(true);
    setUser(user)
  };

  const getSessions = async () => {
    const { data } = await supabase.auth.getSession();
  };

  React.useEffect(() => {
    getUser();
    user && getSessions();
  }, []);

  return ready ? children : <></>;
};
