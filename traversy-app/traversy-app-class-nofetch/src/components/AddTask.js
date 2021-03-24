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

        if (!this.state.text) {alert("Please Add a Task!"); return;}

        this.props.onAdd({...this.state});

        this.setText("");
        this.setDay("");
        this.setReminder(false);
    };

    render() { 
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={this.state.text} onChange={(e) => this.setText(e.target.value)} />
                </div>

                <div className="form-control">
                    <label>Day &times; Time</label>
                    <input type="text" placeholder="Add Day & Time" value={this.state.day} onChange={(e) => this.setDay(e.target.value)} />
                </div>

                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox" checked={this.state.reminder} value={this.state.reminder} onChange={(e) => this.setReminder(e.currentTarget.checked)} />
                </div>

                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        );
    };
}

export default AddTask;