import React from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

const NoteContainer = props => {
  const selectedNote = props.notes.find(
    note => note.id === props.selectedNoteId
  );

  return (
    <div className="note-container">
      <NoteList
        notes={props.notes}
        selectedNoteId={props.selectedNoteId}
        onClickNote={props.onClickNote}
        searchText={props.searchText}
      />
      <NoteEditor
        selectedNote={selectedNote}
        onNoteEditorChange={props.onNoteEditorChange}
      />
    </div>
  );
};

export default NoteContainer;
