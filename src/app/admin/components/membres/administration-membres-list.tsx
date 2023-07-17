import { TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Modal } from 'src/app/components/generic-components/modal';
import { useAxios } from 'src/app/hooks/use-axios';
import { Member, MemberResponse } from 'src/app/models/members';
import { deleteMemberById, getMembers } from 'src/app/services/members';
import Swal from 'sweetalert2';

export const MembresList: React.FC = () => {
  const getMembersFetch = useAxios<MemberResponse[]>(getMembers(), true);
  const [members, setMembers] = React.useState<Member[]>([]);

  const [idMembre, setIdMembre] = React.useState<number>(0);

  React.useEffect(() => {
    if (getMembersFetch.response)
      setMembers(
        getMembersFetch.response?.map((m: MemberResponse) => new Member(m))
      );
    else {
      setMembers([]);
    }
  }, [getMembersFetch.response]);

  const deleteMembreFetch = useAxios(deleteMemberById(idMembre), false);

  const handleDeleteMembre = (id: number, pseudo: string) => {
    setIdMembre(id);

    Swal.fire({
      title: `<div class="font-normal text-xl">Êtes-vous sure de retirer le membre <br /> <span class="font-bold">${pseudo}</span></div>`,
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      confirmButtonColor: 'red',
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2 bg-red-600',
        denyButton: 'order-3'
      }
    }).then(result => {
      if (result.isConfirmed) {
        idMembre && deleteMembreFetch.executeFetch();
        Swal.fire("", '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  return (
    <>
      <ul className="w-2/4 divide-y divide-gray-100">
        {members.map(member => (
          <li
            key={member.email}
            className="flex  items-center justify-between gap-x-6 py-5"
          >
            <div className="flex items-center gap-x-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 font-bold text-indigo-400">
                {member?.prenom?.charAt(0).toUpperCase()}
                {member?.nom?.charAt(0).toUpperCase()}
              </span>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {member.pseudo}
                  <span className="ms-2 font-normal text-slate-400">
                    "{member.nom.toUpperCase()} {member.prenom}"
                  </span>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {member.email}
                </p>
                <p className="mt-1 truncate text-xs font-semibold leading-5 text-gray-500">
                  {+member.statut === 1 ? 'Membre' : 'Admin'}
                </p>
              </div>
            </div>
            {member.isAdmin() ? (
              ''
            ) : (
              <span
                onClick={() =>
                  handleDeleteMembre(member.idMembre, member.pseudo)
                }
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
              >
                <TrashIcon className="h-5" />
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
