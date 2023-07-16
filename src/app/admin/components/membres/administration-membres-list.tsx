import { TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useAxios } from 'src/app/hooks/use-axios';
import { Member, MemberResponse } from 'src/app/models/members';
import { getMembers } from 'src/app/services/members';

export const MembresList: React.FC = () => {
  const getMembersFetch = useAxios<MemberResponse[]>(getMembers(), true);
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembersFetch.response &&
      setMembers(
        getMembersFetch.response?.map((m: MemberResponse) => new Member(m))
      );
  }, [getMembersFetch.response]);

  return (
    <ul className="w-2/4 divide-y divide-gray-100">
      {members.map(member => (
        <li
          key={member.email}
          className="flex  items-center justify-between gap-x-6 py-5"
        >
          <div className="flex items-center gap-x-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 font-bold text-indigo-400">
              {member.prenom.charAt(0).toUpperCase()}
              {member.nom.charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {member.pseudo}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {member.nom.toUpperCase()} {member.prenom}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {member.email}
              </p>
              <p className="mt-1 truncate text-xs font-semibold leading-5 text-gray-500">
                {+member.statut === 1 ? 'Membre' : 'Admin'}
              </p>
            </div>
          </div>
          <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200">
            <TrashIcon className="h-5" />
          </span>
        </li>
      ))}
    </ul>
  );
};
