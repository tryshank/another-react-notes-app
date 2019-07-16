import React from "react";
import Note from "./Note";
import { transformNotes } from "../../helpers/helpers";

const NoteList = props => {
  const noteList = transformNotes(props.notes, props.searchText).map(note => (
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
