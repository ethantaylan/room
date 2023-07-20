import { TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Modal } from 'src/app/components/generic-components/modal';
import { Member, MemberResponse } from 'src/app/models/members';
import {
  deleteMemberSupabase,
  getMembresSupabase
} from 'src/app/services/supabase/membres';
import Swal from 'sweetalert2';

export const AdministrationMembresList: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [idMembre, setIdMembre] = React.useState<number>(0);
  const [registerModal, setRegisterModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchMembers = async () => {
      const members = await getMembresSupabase();
      if (members) setMembers(members);
    };
    fetchMembers();
  }, [idMembre]);

  React.useEffect(() => {
    const deleteMember = async () => {
      if (idMembre !== 0) {
        await deleteMemberSupabase(idMembre);

        const updatedMembers = await getMembresSupabase();
        if (updatedMembers) setMembers(updatedMembers);
      }
    };
    deleteMember();
  }, [idMembre]);

  const handleDeleteMember = async (id: number, pseudo: string) => {
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
        setIdMembre(id);
        Swal.fire('', '', 'success');
        console.log(id);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  return (
    <React.Fragment>
      <ul className="divide-y divide-gray-100">
        <div className="flex w-full justify-end">
          <button
            onClick={() => setRegisterModal(true)}
            className="mb-5 rounded border px-5 py-2 hover:bg-slate-100"
          >
            + Ajouter un nouveau membre
          </button>
        </div>
        {members.map((member, index: number) => (
          <li
            key={index}
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
            <span
              onClick={() => handleDeleteMember(member.idMembre, member.pseudo)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <TrashIcon className="h-5" />
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
