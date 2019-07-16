import React from "react";

const Toolbar = props => (
  <div className="toolbar">
    <button className="toolbar-button" onClick={props.onNewNote}>
      New
    </button>
    <button className="toolbar-button" onClick={props.onDeleteNote}>
      Delete
    </button>
  </div>
);

export default Toolbar;
