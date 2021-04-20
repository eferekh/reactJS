import React, { Component } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

class App extends Component {
    state = {
        showAddTask: false,
        tasks: [],
    };

    fetchTasks = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        let data = await res.json();
        data = data.slice(0, 8);

        return data;
    };

    fetchTask = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();

        return data;
    };

    addTask = async (task) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        });

        const data = await res.json();

        this.setState({ tasks: [...this.state.tasks, data] });
    };

    deleteTask = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        });

        let newTasks = this.state.tasks.filter(task => task.id !== id);

        this.setState({ tasks: newTasks });
    };

    toggleReminder = async (id) => {
        const taskToToggle = await this.fetchTask(id);
        const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        const data = await res.json();

        const newTasks = this.state.tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task);
        this.setState({ tasks: newTasks });
    };

    setShowAddTask = (showAdd) => {
        this.setState({ showAddTask: showAdd });
    };

    componentDidMount = async () => {
        const tasksFromServer = await this.fetchTasks();
        this.setState({ tasks: tasksFromServer });

        // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        // .then((res) => res.json())
        // .then((data) => {}, (error) => {});

        // fetch("https://api.example.com/items")
        // .then(res => res.json())
        // .then((result) => {
        //     this.setState({
        //         isLoaded: true,
        //         items: result.items
        //     });
        // },
        // // Note: it's important to handle errors here
        // // instead of a catch() block so that we don't swallow
        // // exceptions from actual bugs in components.
        // (error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     });
        // });
    }

    render() { 
        return (
            <div className="container">
                <Header onAdd={() => this.setShowAddTask(!this.state.showAddTask)} showAdd={this.state.showAddTask} />
                {this.state.showAddTask ? <AddTask onAdd={this.addTask} /> : ""}
                {this.state.tasks.length === 0 ? "No Tasks To Show" : <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} />}
            </div>
        );
    };
};
 
export default App;
