import React, { PropsWithChildren } from 'react';
import { useGlobalDispatch } from '../context/context';
import { useAxios } from '../hooks/use-axios';
import { MemberResponse } from '../models/members';
import { getMemberByEmail } from '../services/members';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [email, setEmail] = React.useState<string>();

  const dispatch = useGlobalDispatch();
  const getMemberByEmailFetch = useAxios<MemberResponse>(
    getMemberByEmail(email || ''),
    false
  );

  React.useEffect(() => {
    if (getMemberByEmailFetch.response) {
      dispatch({
        type: 'CONNECTED',
        payload: getMemberByEmailFetch.response
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMemberByEmailFetch.response]);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('connectedUser');
    setEmail(storedUser || '');
  }, []);

  React.useEffect(() => {
    email && getMemberByEmailFetch.executeFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return children;
};
