import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>

                {counters.map(counter => {
                    return <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement} />
                })}

                {/* {this.props.counters.map(counter => {
                    return <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} />
                })} */}

                {/* {this.state.counters.map(counter => 
                    <Counter key={counter.id} id={counter.id} value={counter.value} onDelete={this.handleDelete} />
                )} */}

                {/* {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} selected={true}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter>
                )} */}

                {/* {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} selected={true} />
                )}; */}


                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
            </div>
        );
    };
}
 
export default Counters;