import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    };

    renderTags = () => {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    };

    formatCount = () => {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    };

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };
}

export default Counter;