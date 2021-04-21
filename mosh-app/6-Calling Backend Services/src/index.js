import React from "react";
import ReactDOM from "react-dom";
import logger from "./services/logService";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
