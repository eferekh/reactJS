import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() { 
        return (
            <button style={{ backgroundColor: this.props.color }} className="btn" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    };
};

Button.defaultProps = {
    color: "steelblue",
    text: "Add",
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};
 
export default Button;