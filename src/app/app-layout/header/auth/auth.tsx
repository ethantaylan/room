import { userIcon } from 'src/app/icons';

export const Auth: React.FC = () => {
  return (
    <div className="me-2 flex items-center">
      {userIcon('h-5 w-5 me-2')}
      <span>Espace Membre</span>
    </div>
  );
};
