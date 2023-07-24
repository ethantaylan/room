import React, { PropsWithChildren } from 'react';
import { useGlobalContext, useGlobalDispatch } from '../context/context';
import { useAxios } from '../hooks/use-axios';
import { MemberResponse } from '../models/members';
import { getMemberByEmail } from '../services/members';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [email, setEmail] = React.useState<string>();
  const [ready, setIsReady] = React.useState<boolean>(false);

  const { member } = useGlobalContext();

  const dispatch = useGlobalDispatch();
  const getMemberByEmailFetch = useAxios<MemberResponse[]>(
    getMemberByEmail(email || ''),
    false
  );

  React.useEffect(() => {
    if (getMemberByEmailFetch.response) {
      dispatch({
        type: 'CONNECTED',
        payload: getMemberByEmailFetch.response?.[0]
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMemberByEmailFetch.response]);

  React.useEffect(() => {
    member && setIsReady(true);
  }, [member]);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('connectedUser');
    setEmail(storedUser || '');
  }, []);

  React.useEffect(() => {
    if (email) {
      getMemberByEmailFetch.executeFetch();
    } else {
      setIsReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return ready ? children : <></>;
};
