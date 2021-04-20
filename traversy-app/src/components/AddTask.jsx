import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: "",
        day: "",
        reminder: false,
    };

    setText = (text) => {
        this.setState({ text });
    };

    setDay = (day) => {
        this.setState({ day });
    };

    setReminder = (reminder) => {
        this.setState({ reminder });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.text) {
            alert("Please Add a Task!");
            return;
        }

        this.props.onAdd({ ...this.state });

        this.setText("");
        this.setDay("");
        this.setReminder(false);
    };
    
    render() { 
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <div className="form-control">
                    <label htmlFor="taskInput">Task</label>
                    <input type="text" id="taskInput" placeholder="Add Task" value={this.state.text} onChange={e => this.setText(e.target.value)} />
                </div>

                <div className="form-control">
                    <label htmlFor="dayTimeInput">Day & Time</label>
                    <input type="text" id="dayTimeInput" placeholder="Add Day & Time" value={this.state.day} onChange={e => this.setDay(e.target.value)} />
                </div>

                <div className="form-control form-control-check">
                    <label htmlFor="reminderCheckbox">Set Reminder</label>
                    <input type="text" id="reminderCheckbox" checked={this.state.reminder} value={this.state.reminder} onChange={e => this.setReminder(e.currentTarget.checked)} />
                </div>

                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        );
    };
};
 
export default AddTask;