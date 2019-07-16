import React from "react";

const Note = props => (
  <div
    className="note"
    onClick={() => {
      props.onClickNote(props.id);
    }}
  >
    <p className="note-title">{props.body}</p>
  </div>
);

export default Note;
