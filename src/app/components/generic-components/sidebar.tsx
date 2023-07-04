import React, { PropsWithChildren } from 'react';

export const Sidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="h-auto mt-5 p-6 flex shadow-xl rounded-md bg-slate-white text-blakc"
    >
      {children}
      <div className="flex flex-col">
        {' '}
        <h1 className="text-lg font-bold">ADMINISTRATION</h1> <span>test</span>
        <span>Gestion des salles</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
        <span>test</span>
      </div>
    </div>
  );
};
