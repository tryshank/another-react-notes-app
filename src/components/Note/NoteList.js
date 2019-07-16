import React from "react";
import Note from "./Note";

const NoteList = props => {
  const noteList = props.notes.map(note => (
    <Note
      key={note.id}
      id={note.id}
      body={note.body}
      timestamp={note.timestamp}
      selectedNoteId={props.selectedNoteId}
      onClickNote={props.onClickNote}
    />
  ));

  return <div className="note-list">{noteList}</div>;
};

export default NoteList;
