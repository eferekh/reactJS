import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    render() {
        const { counters, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div className="countersContainer">
                {counters.map((counter) => {
                    return (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Counters;
