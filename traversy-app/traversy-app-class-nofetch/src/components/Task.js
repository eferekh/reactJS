import { FaTimes } from 'react-icons/fa';
import React, { Component } from 'react';

class Task extends Component {
    render() { 
        return (
            <div className={`task ${this.props.task.reminder ? "reminder" : ""}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)}>
                <h3>
                    {this.props.task.text}
                    <FaTimes onClick={() => this.props.onDelete(this.props.task.id)} style={{ color: "red", cursor: "pointer" }} />
                </h3>
                <p>{this.props.task.day}</p>
            </div>
        );
    };
}
 
export default Task;