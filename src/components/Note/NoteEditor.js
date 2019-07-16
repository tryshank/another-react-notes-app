import React from "react";

const NoteEditor = props => {
  const handleChange = event => {
    props.onNoteEditorChange(event.target.value);
  };

  return props.selectedNote ? (
    <div className="note-editor">
      <textarea
        className="note-editor-input"
        value={props.selectedNote.body}
        onChange={handleChange}
      />
    </div>
  ) : null;
};

export default NoteEditor;
