import React, { PropsWithChildren } from 'react';
import { useGlobalContext } from '../context/context';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { member } = useGlobalContext();

  return !member ? children : <></>;
};
