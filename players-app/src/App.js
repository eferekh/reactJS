import React, { Component } from "react";
import Header from "./Components/Header";
import Users from "./Components/Users";

class App extends Component {
    state = {
        users: [],
    };

    fetchUsers = async () => {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/users`
        );
        let usersData = await response.json();

        this.setState({ users: usersData });
    };

    updateWebsiteName = (name, id) => {
        let newUsersArr = [...this.state.users];

        for (let i = 0; i < newUsersArr.length; i++) {
            if (newUsersArr[i].id === id) {
                newUsersArr[i].website = name;
            }
        }

        this.setState({ users: newUsersArr });
    };

    componentDidMount = () => {
        this.fetchUsers();
    };

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <Users
                        users={this.state.users}
                        updateWebsiteName={this.updateWebsiteName}
                    />
                </div>
            </>
        );
    }
}

export default App;
