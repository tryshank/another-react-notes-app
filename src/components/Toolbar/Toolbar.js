import React from "react";

const Toolbar = props => {
  const handleInput = event => {
    props.onSearchNote(event.target.value);
  };

  return (
    <div className="toolbar">
      <button className="toolbar-button" onClick={props.onNewNote}>
        New
      </button>
      <button className="toolbar-button" onClick={props.onDeleteNote}>
        Delete
      </button>
      <input
        className="toolbar-search"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
      />
    </div>
  );
};

export default Toolbar;
