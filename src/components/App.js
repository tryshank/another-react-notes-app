import React, { useState } from "react";
import NoteContainer from "./Note/NoteContainer";
import "./App.css";

const App = props => {
  const state = {
    notes: [
      { id: 1, body: "This is a first test" },
      { id: 2, body: "Second test over here" },
      { id: 3, body: "This is the good third test!" },
      { id: 4, body: "The forth note goes" }
    ]
  };

  const [selectedNoteId, setSelectedNoteId] = useState(1);
  const [notes, setNotes] = useState(state.notes);

  const handleClickNote = id => {
    setSelectedNoteId(id);
  };

  const handleNoteEditorChange = text => {
    const newNotes = notes.map(note => {
      if (note.id === selectedNoteId) {
        return {
          id: note.id,
          body: text,
        };
      } else {
        return note;
      }
    });

    setNotes(newNotes);
  };

  return (
    <div id="app">
      <NoteContainer
        notes={notes}
        selectedNoteId={selectedNoteId}
        onClickNote={handleClickNote}
        onNoteEditorChange={handleNoteEditorChange}
      />
    </div>
  );
};

export default App;
