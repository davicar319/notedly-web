import React, { useEffect } from 'react';

import NoteForm from '../../final/components/NoteForm';

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note -- Notedly';
  });

  return <NoteForm/>;
};

export default NewNote;