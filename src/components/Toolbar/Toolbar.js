import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = props => {
  const handleInput = event => {
    props.onSearchNote(event.target.value);
  };

  return (
    <div className="toolbar">
      <button className="toolbar-button" onClick={props.onNewNote}>
        <FontAwesomeIcon size="lg" icon="edit" />
      </button>
      <button className="toolbar-button" onClick={props.onDeleteNote}>
        <FontAwesomeIcon size="lg" icon="trash-alt" />
      </button>
      <div className="toolbar-search">
        <FontAwesomeIcon className="toolbar-search-icon" icon="search" />
        <input type="text" placeholder="Search..." onInput={handleInput} />
      </div>
    </div>
  );
};

export default Toolbar;
