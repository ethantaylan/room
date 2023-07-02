import { Member, MemberResponse } from '../models/members';
import { useAxios } from '../hooks/use-axios';
import { getMembers } from '../services/members/index';
import React from 'react';

export const Members: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  const getMembersFetch = useAxios<MemberResponse[]>(getMembers());

  React.useEffect(() => {
    getMembersFetch.response &&
      setMembers(
        getMembersFetch.response?.map((m: MemberResponse) => new Member(m))
      );
  }, [getMembersFetch.response]);

  console.log(members);

  return (
    <ul>
      {members.map((member: Member, index: number) => (
        <li key={index}>{member.pseudo}</li>
      ))}
    </ul>
  );
};
