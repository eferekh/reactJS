import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import "./App.css";
import axios from "axios";

class App extends Component {
    state = {
        users: [],

        userData: {
            userFormUserid: "-1",
            userFormName: "",
            userFormEmail: "",
            userFormCity: "",
            userFormPhonenumber: "",
            userFormRole: "-1",
        },

        userFormShowHideStatus: "none",
    };

    // ## ## ## ## ## //
    fetchUsers = async () => {
        const res = await axios.post(
            "http://localhost/reactphp-app-backend/Home/reactGetUsers"
        );
        const data = res.data;

        const flag = data[0];

        if (flag === 1) {
            const newUsers = data[1];
            this.setState({ users: newUsers });
        }
    };

    // ## ## ## ## ## //
    resetUserData = () => {
        let userData = {
            userFormUserid: "-1",
            userFormName: "",
            userFormEmail: "",
            userFormCity: "",
            userFormPhonenumber: "",
            userFormRole: "-1",
        };

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormUserid = (id) => {
        let userData = { ...this.state.userData };
        userData.userFormUserid = id;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormName = (name) => {
        let userData = { ...this.state.userData };
        userData.userFormName = name;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormEmail = (email) => {
        let userData = { ...this.state.userData };
        userData.userFormEmail = email;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormCity = (city) => {
        let userData = { ...this.state.userData };
        userData.userFormCity = city;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormPhonenumber = (phonenumber) => {
        let userData = { ...this.state.userData };
        userData.userFormPhonenumber = phonenumber;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    setUserFormRole = (role) => {
        let userData = { ...this.state.userData };
        userData.userFormRole = role;

        this.setState({ userData });
    };

    // ## ## ## ## ## //
    submitUserForm = async () => {
        let formData = new FormData();
        formData.append("userFormUserid", this.state.userData.userFormUserid);
        formData.append("userFormName", this.state.userData.userFormName);
        formData.append("userFormEmail", this.state.userData.userFormEmail);
        formData.append("userFormCity", this.state.userData.userFormCity);
        formData.append(
            "userFormPhonenumber",
            this.state.userData.userFormPhonenumber
        );
        formData.append("userFormRole", this.state.userData.userFormRole);

        let res = await axios({
            method: "POST",
            url: "http://localhost/reactphp-app-backend/Home/reactAddEditUser",
            data: formData
        });

        let data = res.data;
        let flag = data[0];

        if (flag === 1) {
            this.resetUserData();
            this.setState({ userFormShowHideStatus: "none" });
            this.fetchUsers();
        } else {
            let msg = data[1];
            alert(msg);
        }
    };

    // ## ## ## ## ## //
    getUserData = async (userId) => {
        let formData = new FormData();
        formData.append("userId", userId);

        let res = await axios({
            method: "POST",
            url: `http://localhost/reactphp-app-backend/Home/reactGetUserData`,
            data: formData
        });

        let data = res.data;
        let flag = data[0];

        if (flag === 1) {
            let userData = data[1][0];
            let userName = `${userData.fname} ${userData.lname}`;
            let userEmail = userData.email;
            let userPhonenumber = userData.phone_number;
            let userCity = userData.city;
            let userRole = userData.role;

            this.setUserFormUserid(userId);
            this.setUserFormName(userName);
            this.setUserFormEmail(userEmail);
            this.setUserFormPhonenumber(userPhonenumber);
            this.setUserFormCity(userCity);
            this.setUserFormRole(userRole);

            this.setState({ userFormShowHideStatus: "block" });
        } else {
            let msg = data[1];
            alert(msg);
        }
    };

    // ## ## ## ## ## //
    changeUserFormShowHideStatus = () => {
        if (this.state.userFormShowHideStatus === "none") {
            this.setState({ userFormShowHideStatus: "block" });
        } else {
            this.setState({ userFormShowHideStatus: "none" });
            this.resetUserData();
        }
    };

    // ## ## ## ## ## //
    deleteUser = async (userId) => {
        let formData = new FormData();
        formData.append("userId", userId);

        let res = await axios({
            method: "POST",
            url: `http://localhost/reactphp-app-backend/Home/reactDeleteUser`,
            data: formData
        });

        let data = res.data;
        let flag = data[0];

        if (flag === 1) {
            this.fetchUsers();
        } else {
            let msg = data[1];
            alert(msg);
        }
    };

    // ## ## ## ## ## //
    componentDidMount = () => {
        this.fetchUsers();
    };

    render() {
        return (
            <>
                <Header />

                <div className="container">
                    <UserForm
                        userData={this.state.userData}
                        userFormShowHideStatus={
                            this.state.userFormShowHideStatus
                        }
                        resetUserData={this.resetUserData}
                        setUserFormName={this.setUserFormName}
                        setUserFormEmail={this.setUserFormEmail}
                        setUserFormCity={this.setUserFormCity}
                        setUserFormPhonenumber={this.setUserFormPhonenumber}
                        setUserFormRole={this.setUserFormRole}
                        submitUserForm={this.submitUserForm}
                        changeUserFormShowHideStatus={
                            this.changeUserFormShowHideStatus
                        }
                    />
                    <Users
                        users={this.state.users}
                        getUserData={this.getUserData}
                        deleteUser={this.deleteUser}
                    />
                </div>

                <Footer />
            </>
        );
    }
}

export default App;
