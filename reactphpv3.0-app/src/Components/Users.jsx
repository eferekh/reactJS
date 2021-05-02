import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import UsersTable from "./Users/UsersTable";
import UsersForm from "./Users/UsersForm";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Users extends Component {
    state = {
        users: [],

        user: {
            userId: -1,
            firstName: "",
            lastName: "",
            email: "",
            isAdmin: false,
        },

        showUserForm: false,
    };

    getUsers = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getUsers`,
            method: "POST",
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === -1 || flag === 0) {
            const msg = data[1];
            this.props.alert(msg);
        } else {
            const users = data[1];
            this.setState({ users });
        }
    };

    handleInputChange = (e) => {
        const user = { ...this.state.user };
        user[e.currentTarget.name] = e.currentTarget.value;

        this.setState({ user });
    };

    handleCheckboxChange = (e) => {
        const user = { ...this.state.user };
        const checked = e.currentTarget.checked;
        user.isAdmin = checked;

        this.setState({ user });
    };

    resetForm = () => {
        const user = {
            userId: -1,
            firstName: "",
            lastName: "",
            email: "",
            isAdmin: false,
        };

        this.setState({ user });
    };

    handleShowForm = (bool) => {
        let showUserForm;

        if (bool) showUserForm = true;
        else {
            this.resetForm();
            showUserForm = !this.state.showUserForm;
        }

        this.setState({ showUserForm });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    render() {
        return (
            <>
                <Header active="users" />

                <div className="container mt-2 mb-2">
                    <UsersForm
                        show={this.state.showUserForm}
                        user={this.state.user}
                        onChangeHandler={this.handleInputChange}
                        onChangeHandlerCheckbox={this.handleCheckboxChange}
                        onToggle={this.handleShowForm}
                    />

                    <UsersTable users={this.state.users} />
                </div>

                <Footer />
            </>
        );
    }
}

Users.propTypes = {
    alert: PropTypes.func,
};

export default Users;
