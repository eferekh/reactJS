import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="navbar bg-dark text-white">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        PHP React CRUD App
                    </span>
                </div>
            </nav>
        );
    }
}

export default Header;
