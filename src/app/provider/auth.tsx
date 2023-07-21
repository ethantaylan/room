import React, { PropsWithChildren } from 'react';
import { supabase } from '../config';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ready, setIsReady] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<number>();
  const [userFetched, setUserFetched] = React.useState<boolean>(false);

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    setUserId(user.id);

    setIsReady(true);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  React.useEffect(() => {
    if (userId && !userFetched) {
      userMetadata();
      setUserFetched(true);
    }
  }, [userId, userFetched]);

  // Assuming you have some additional information to add to the metadata
  const additionalData = {
    age: 30,
    location: 'New York',
    interests: ['programming', 'gaming', 'reading']
  };

  const userMetadata = async () => {
    const { error } = await supabase
      .from('users')
      .update({ user_metadata: additionalData })
      .eq('id', userId);
  };

  return ready ? children : <></>;
};
