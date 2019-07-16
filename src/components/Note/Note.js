import React from "react";
import { formatTimestamp } from "../../helpers/helpers";

const Note = props => (
  <div
    className="note"
    onClick={() => {
      props.onClickNote(props.id);
    }}
  >
    <p className="note-title">{props.body}</p>
    <p className="note-timestamp">{formatTimestamp(props.timestamp)}</p>
  </div>
);

export default Note;
