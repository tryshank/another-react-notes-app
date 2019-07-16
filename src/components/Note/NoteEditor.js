import React from "react";
import { formatTimestamp } from "../../helpers/helpers";

const NoteEditor = props => {
  const handleChange = event => {
    props.onNoteEditorChange(event.target.value);
  };

  return props.selectedNote ? (
    <div className="note-editor">
      <p className="note-editor-info">
        {formatTimestamp(props.selectedNote.timestamp)}
      </p>
      <textarea
        className="note-editor-input"
        value={props.selectedNote.body}
        onChange={handleChange}
      />
    </div>
  ) : null;
};

export default NoteEditor;
