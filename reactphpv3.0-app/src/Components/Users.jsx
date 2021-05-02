import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import UsersTable from "./Users/UsersTable";
import UsersForm from "./Users/UsersForm";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Users extends Component {
    state = {
        users: [],
    };

    getUsers = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getUsers`,
            method: "POST"
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

    componentDidMount = () => {
        this.getUsers();
    };

    render() { 
        return (
            <>
                <Header active="users" />

                    <div className="container mt-2 mb-2">
                        <UsersForm />

                        <UsersTable users={this.state.users} />
                    </div>

                <Footer />
            </>
        );
    }
}

Users.propTypes = {
    alert: PropTypes.func
}
 
export default Users;