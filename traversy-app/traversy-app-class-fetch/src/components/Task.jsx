import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class Task extends Component {
    render() { 
        return (
            <div className={`task ${this.props.task.completed ? "reminder" : ""}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)}>
                <h3>
                    {this.props.task.title}
                    <FaTimes onClick={() => this.props.onDelete(this.props.task.id)} style={{ color: "red", cursor: "pointer" }} />
                </h3>
                <p>{this.props.task.userId}</p>
            </div>
        );
    };
};
 
export default Task;