import React from "react";
import { formatTitle, formatTimestamp } from "../../helpers/helpers";

const Note = props => (
  <div
    className={"note " + (props.id === props.selectedNoteId ? "active" : "")}
    onClick={() => {
      props.onClickNote(props.id);
    }}
  >
    <p className="note-title">{formatTitle(props.body)}</p>
    <p className="note-timestamp">{formatTimestamp(props.timestamp)}</p>
  </div>
);

export default Note;
