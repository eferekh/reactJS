import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 m-2 h1">Counters <span className="badge badge-warning ml-2">{this.props.totalCounters}</span></span>
                </div>
            </nav>
        );
    }
}

export default NavBar;
