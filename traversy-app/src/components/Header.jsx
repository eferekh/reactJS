import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <Button color={this.props.showAdd ? "red" : "green"} text={this.props.showAdd ? "Close" : "Add"} onClick={this.props.onAdd} />
            </header>
        );
    };
};

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
 
export default Header;
