import React, { Component } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

class App extends Component {
    state = {
        showAddTask: false,
        tasks: [
            {
                id: 1,
                text: "Doctors Appointment",
                day: "Feb 5th at 2:30pm",
                reminder: true,
            },
            {
                id: 2,
                text: "Meeting at School",
                day: "Feb 6th at 1:30pm",
                reminder: true,
            },
            {
                id: 3,
                text: "Food Shopping",
                day: "Feb 5th at 2:30pm",
                reminder: false,
            },
        ],
    };

    addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task};

        this.setState({ tasks: [...this.state.tasks, newTask] });
    };

    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: newTasks });
    };

    toggleReminder = (id) => {
        const newTasks = this.state.tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task);
        this.setState({ tasks: newTasks });
    };

    setShowAddTask = (showAdd) => {
        this.setState({ showAddTask: showAdd });
    };

    render() { 
        return (
            <div className="container">
                <Header onAdd={() => this.setShowAddTask(!this.state.showAddTask)} showAdd={this.state.showAddTask} />
                {this.state.showAddTask ? <AddTask onAdd={this.addTask} /> : ""}
                {this.state.tasks.length === 0 ? "No Tasks To Show" : <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} />}
            </div>
        );
    };
}
 
export default App;
