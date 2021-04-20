import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
    render() { 
        return (
            <>
                {this.props.tasks.map(task => {
                    return <Task key={task.id} task={task} onDelete={this.props.onDelete} onToggle={this.props.onToggle} />
                })}
            </>
        );
    };
};
 
export default Tasks;