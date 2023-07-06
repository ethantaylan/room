import React from 'react';
import { ChangeEvent } from 'react';
import { Input } from 'src/app/components/generic-components/input';
import { Modal } from 'src/app/components/generic-components/modal';
import { Salle } from 'src/app/models/salles';

export const AjouterUneNouvelleSalleModal: React.FC = () => {
  const [sentData, setSentData] = React.useState<Salle[]>([]);
  
  



  return (
    <Modal
      title="Nouvelle salle"
      description={''}
      isModal={true}
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
    >
      <Input
        label={'Nom de la salle'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Description'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Image'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Pays'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Ville'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Adresse'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'CP'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Capacité'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label={'Catégorie'}
        onChange={function (): ChangeEvent<HTMLInputElement> {
          throw new Error('Function not implemented.');
        }}
      />
    </Modal>
  );
};
