import React, { PropsWithChildren } from 'react';
import { useGlobalContext } from '../context/context';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ready, setIsReady] = React.useState<boolean>(false);

  const { member } = useGlobalContext();

  //GET SESSION THEN SET READY TRUE

  return !ready ? children : <></>;
};
