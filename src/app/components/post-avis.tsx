import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { deleteAvis, getAvis, postAvis } from '../services/avis';
import { Avis } from '../models/avis';

export const PostAvis: React.FC = () => {
  const [comment, setComment] = React.useState<string>();
  const [idAvis, setIdAvis] = React.useState<number>();

  const postAvisFetch = useAxios(
    postAvis(comment || '', '2016-06-15 14:35:00', 4, 1, 1, 4),
    false
  );

  const getAvisFetch = useAxios<Avis[]>(getAvis(), true);
  const deleteAvisFetch = useAxios<Avis>(deleteAvis(idAvis || 0), false);

  const handleDeleteAvis = (idAvis: number) => {
    setIdAvis(idAvis); // Set the id_avis before executing the delete request
  };

  React.useEffect(() => {
    idAvis && deleteAvisFetch.executeFetch();
  }, [idAvis]);

  React.useEffect(() => {
    getAvisFetch.executeFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteAvisFetch.response, postAvisFetch.response]);

  return (
    <div className="mb-96">
      <input
        value={comment}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setComment(event.target.value)
        }
        className="border"
        type="text"
      />
      <button
        onClick={() => {
          postAvisFetch.executeFetch();
        }}
      >
        send avis
      </button>
      {getAvisFetch.response?.map((avis: Avis, index: number) => (
        <div className="flex" key={index}>
          <h1 className="me-3">{avis.commentaire}</h1>
          <button
            onClick={() => {
              handleDeleteAvis(avis.id_avis);
            }}
            className="text-red-600"
          >
            delete avis
          </button>
        </div>
      ))}
    </div>
  );
};
