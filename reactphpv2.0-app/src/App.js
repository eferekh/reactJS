import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UsersTable from "./components/UsersTable";
import axios from "axios";

class App extends Component {
    state = {
        users: [],

        BASE_URL: "http://localhost/reactphpv2-app-backend",
    };

    fetchUsersForUsersTable = async () => {
        let axiosResponse = await axios({
            method: "POST",
            url: `${this.state.BASE_URL}/Home/reactGetUsers`,
        });
        let data = axiosResponse.data;
        let flag = data[0];

        if (flag === -1) {
            let msg = data[1];
            alert(msg);
        } else {
            let users = data[1];
            this.setState({ users });
        }
    };

    increaseAmount = async (userId, userAmount) => {
        let formData = new FormData();
        formData.append("userId", userId);
        formData.append("amount", userAmount);

        const axiosRes = await axios({
            url: `${this.state.BASE_URL}/Home/reactIncreaseAmount`,
            method: "POST",
            data: formData
        });
        const data = axiosRes.data;
        const flag = data[0];

        if (flag === -1) {
            const msg = data[1];
            alert(msg);
        } else {
            let newUsers = [...this.state.users];
            newUsers.forEach((user, index) => {
                if (user.id === userId) {
                    user.amount++;
                }
            });

            this.setState({ users: newUsers });
        }
    };

    decreaseAmount = async (userId, userAmount) => {
        let formData = new FormData();
        formData.append("userId", userId);
        formData.append("amount", userAmount);

        const axiosRes = await axios({
            url: `${this.state.BASE_URL}/Home/reactDecreaseAmount`,
            method: "POST",
            data: formData 
        });
        const data = axiosRes.data;
        const flag = data[0];

        if (flag === -1) {
            const msg = data[1];
            alert(msg);
        } else {
            let newUsers = [...this.state.users];
            newUsers.forEach((user, index) => {
                if (user.id === userId) {
                    user.amount--;
                }
            });
    
            this.setState({ users: newUsers });
        }
    };

    componentDidMount = () => {
        this.fetchUsersForUsersTable();
    };

    render = () => {
        const { users } = this.state;

        return (
            <>
                <Header />

                <div className="container mt-2 mb-2">
                    <UsersTable
                        users={users}
                        onIncrease={this.increaseAmount}
                        onDecrease={this.decreaseAmount}
                    />
                </div>

                <Footer />
            </>
        );
    };
}

export default App;
