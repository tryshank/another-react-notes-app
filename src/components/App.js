import React, { useState } from "react";
import NoteContainer from "./Note/NoteContainer";
import Toolbar from "./Toolbar/Toolbar";
import "./App.css";

const App = props => {
  const state = {
    notes: [
      { id: 1, body: "This is a first test", timestamp: Date.now() },
      { id: 2, body: "Second test over here", timestamp: Date.now() },
      { id: 3, body: "This is the good third test!", timestamp: Date.now() },
      { id: 4, body: "The forth note goes", timestamp: Date.now() }
    ]
  };

  const [selectedNoteId, setSelectedNoteId] = useState(1);

  const handleClickNote = id => {
    setSelectedNoteId(id);
  };

  const [notes, setNotes] = useState(state.notes);

  const handleNoteEditorChange = text => {
    const newNotes = notes.map(note => {
      if (note.id === selectedNoteId) {
        return {
          id: note.id,
          body: text,
          timestamp: Date.now()
        };
      } else {
        return note;
      }
    });

    setNotes(newNotes);
  };

  const handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      body: "",
      timestamp: Date.now()
    };

    setNotes(notes.concat([newNote]));
    setSelectedNoteId(newNote.id);
  };

  const handleDeleteNote = () => {
    const newNotes = notes.filter(note => note.id !== selectedNoteId);
    const transformedNotes = newNotes;
    const newSelectedNoteId =
      transformedNotes.length > 0 ? transformedNotes[0].id : null;

    setNotes(newNotes);
    setSelectedNoteId(newSelectedNoteId);
  };

  return (
    <div id="app">
      <Toolbar onNewNote={handleNewNote} onDeleteNote={handleDeleteNote} />
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
