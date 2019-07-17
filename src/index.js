import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

library.add(faEdit);
library.add(faTrashAlt);
library.add(faSearch);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
