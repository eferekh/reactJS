import React, { Component } from 'react';

class CounterTemplate extends Component {
    constructor() {
        super();
        
        // If not using arrow function syntax, 
        // we need to bind 'this' keyword in order to use it in methods.
        this.handleIncrement = this.handleIncrement.bind(this);
    };

    state = {
        count: 0,
        value: this.props.value,
        value: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"],
        imageUrl: "https://picsum.photos/100",
        address: {
            street: "123St"
        },
    };

    styles = {
        "fontWeight": "bold",
        "fontSize": "13px",
    };

    handleIncrement = (id) => {
        console.log(id);
        this.setState({ count: this.state.count + 1 });
    };

    renderTags = () => {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    };

    formatCount = () => {
        return this.state.count === 0 ? "Zero" : this.state.count;
    };

    getBadgeClasses = () => {
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };

    anotherFormatCount = () => {
        if (this.state.count === 0) {
            return (
                <div>
                    <span>Zero</span>
                </div>
            );
        } else {
            return this.state.count;
        }
    };

    handleClickIncrement = () => {
        let newState = {};
        newState.count = this.state.count;
        newState.count++;

        this.setState(newState);
    };

    formatCount = () => {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    };

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };
    
    render() { 
        return (
            <div>
                {this.props.children}

                <button onClick={ () => this.handleIncrement({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button>

                <input type="text" onChange={ (e) => this.setState({ text: e.target.value }) } />

                <ul>{this.renderTags()}</ul>

                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                <span style={this.styles}></span>
                
                <span style={ {"fontSize": "20px", "fontWeight": "bold"} }></span>
                
                <img src={this.state.imageUrl} alt="100 by 100 Random Image"/>
                
                <span>{this.formatCount()}</span>
                
                <span>{2 + 2}</span>
            </div>

            // <React.Fragment>
            //     <h1>Hello World</h1>
            //     <button>Increment</button>
            // </React.Fragment>
        );
    };
}
 
export default CounterTemplate;