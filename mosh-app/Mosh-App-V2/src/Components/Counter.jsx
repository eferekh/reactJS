import React, { Component } from "react";

class Counter extends Component {
    formatValue = () => {
        const value = this.props.counter.value;
        return value === 0 ? "Zero" : value;
    };

    getValueClasses = () => {
        let classes = "badge counterBadge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";

        return classes;
    };

    render() {
        const { onIncrement, onDecrement, onDelete, counter } = this.props;

        return (
            <div className="counterContainer">
                <span className={this.getValueClasses()}>
                    {this.formatValue()}
                </span>

                <button
                    className="btn btn-sm btn-secondary m-2"
                    onClick={() => onIncrement(counter)}
                >
                    +
                </button>
                <button
                    className="btn btn-sm btn-secondary m-2"
                    onClick={() => onDecrement(counter)}
                >
                    -
                </button>
                <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => onDelete(counter)}
                >
                    X
                </button>
            </div>
        );
    }
}

export default Counter;
