import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

import NoteForm from '../../final/components/NoteForm';

const NEW_NOTE = gql`
    mutation newNote ($content: String!) {
        newNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`;

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note -- Notedly';
  });

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    onCompleted: data => {
      // when complete, redirect user to the note page.
      props.history.push(`note/${data.newNote.id}`);
    }
  });
  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note!</p>}
      <NoteForm action={data}/>;
    </React.Fragment>
  );
};

export default NewNote;