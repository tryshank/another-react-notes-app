import React, { useState } from "react";
import NoteContainer from "./Note/NoteContainer";
import Toolbar from "./Toolbar/Toolbar";
import { transformNotes } from "../helpers/helpers";
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
  const [notes, setNotes] = useState(state.notes);
  const [searchText, setSearchText] = useState("");

  const handleClickNote = id => {
    setSelectedNoteId(id);
  };

  const handleNoteEditorChange = text => {
    const newNotes = notes.map(note => {
      if (note.id === selectedNoteId) {
        return {
          id: note.id,
          body: text,
          timestamp: Date.now()
        };
      }
      return note;
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

  const handleSearchNote = newSearchText => {
    const transformedNotes = transformNotes(notes, newSearchText);
    let newSelectedNoteId = null;
    if (transformedNotes.length > 0) {
      const selectedNote = transformedNotes.find(
        note => note.id === selectedNoteId
      );
      if (selectedNote) {
        newSelectedNoteId = selectedNote.id;
      } else {
        newSelectedNoteId = transformedNotes[0].id;
      }
    }

    setSearchText(newSearchText);
    setSelectedNoteId(newSelectedNoteId);
  };

  return (
    <div id="app">
      <Toolbar
        onNewNote={handleNewNote}
        onDeleteNote={handleDeleteNote}
        onSearchNote={handleSearchNote}
      />
      <NoteContainer
        notes={notes}
        selectedNoteId={selectedNoteId}
        searchText={searchText}
        onClickNote={handleClickNote}
        onNoteEditorChange={handleNoteEditorChange}
      />
    </div>
  );
};

export default App;
