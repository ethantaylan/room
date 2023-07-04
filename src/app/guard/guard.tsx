import React from 'react';
import { useGlobalContext } from '../context/context';
import { Navigate } from 'react-router-dom';

export const Guard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { member } = useGlobalContext();

  if (!member?.isAdmin()) {
    return <Navigate to="/"  replace />;
  }
  return children;
};