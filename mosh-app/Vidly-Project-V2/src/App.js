import React, { Component } from "react";
import Movies from "./Components/Movies";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <Movies />
            </div>
        );
    }
}

export default App;
