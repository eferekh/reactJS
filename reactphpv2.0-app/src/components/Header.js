import React, { Component } from "react";

class Header extends Component {
    render = () => {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">React PHP App</span>
                </div>
            </nav>
        );
    }
}

export default Header;
