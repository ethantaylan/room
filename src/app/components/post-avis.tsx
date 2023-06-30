import React from 'react';
import { useAxios } from '../hooks/use-axios';
import { getAvisAxios, postAvis } from '../services/avis';

export const PostAvis: React.FC = () => {
  const [comment, setComment] = React.useState<string>();

  const getAvis = useAxios(getAvisAxios());
  console.log(getAvis.response);

  const postAvisFetch = useAxios(
    postAvis(comment || '', '2016-06-15 14:35:00', 4, 1, 1, 4),
    false
  );

  console.log(comment);

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
          getAvis.executeFetch();
        }}
      >
        send avis
      </button>
    </div>
  );
};
