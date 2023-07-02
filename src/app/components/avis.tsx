import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { deleteAvis, getAvis, postAvis } from '../services/avis';
import { Avis, AvisResponse } from '../models/avis';

export const PostAvis: React.FC = () => {
  const [comment, setComment] = React.useState<string>();
  const [idAvis, setIdAvis] = React.useState<number>();
  const [avis, setAvis] = React.useState<Avis[]>([]);

  const postAvisFetch = useAxios(
    postAvis(comment || '', '2016-06-15 14:35:00', 4, 1, 1, 4),
    false
  );

  const getAvisFetch = useAxios<AvisResponse[]>(getAvis(), true);
  const deleteAvisFetch = useAxios<Avis>(deleteAvis(idAvis || 0), false);

  const handleDeleteAvis = (idAvis: number) => {
    setIdAvis(idAvis);
  };

  React.useEffect(() => {
    idAvis && deleteAvisFetch.executeFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idAvis]);

  React.useEffect(() => {
    getAvisFetch.executeFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteAvisFetch.response, postAvisFetch.response]);

  React.useEffect(() => {
    getAvisFetch.response &&
      setAvis(getAvisFetch.response?.map((a: AvisResponse) => new Avis(a)));
  }, [getAvisFetch.response]);

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
          setComment('');
        }}
      >
        send avis
      </button>
      {avis.map((avis: Avis, index: number) => (
        <div className="flex" key={index}>
          <h1 className="me-3">{avis.commentaire}</h1>
          <button
            onClick={() => {
              handleDeleteAvis(avis.idAvis);
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
