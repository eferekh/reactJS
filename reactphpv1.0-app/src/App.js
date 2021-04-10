import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import AlertModal from "./components/AlertModal";
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

        alertModalMessage: "",
        showAlertModal: false,

        userDeleteModalId: -1,
        showUserDeleteModal: false,
    };

    // ## ## ## ## ## //
    setShowAlertModal = () => {
        this.setState({ showAlertModal: !this.state.showAlertModal });
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
        const userData = {
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

        const res = await axios({
            method: "POST",
            url: "http://localhost/reactphp-app-backend/Home/reactAddEditUser",
            data: formData,
        });

        const data = res.data;
        const flag = data[0];

        if (flag === 1) {
            this.resetUserData();
            this.setState({ userFormShowHideStatus: "none" });
            this.fetchUsers();
        } else {
            const msg = data[1];
            this.showAlertModal(msg);
        }
    };

    // ## ## ## ## ## //
    getUserData = async (userId) => {
        let formData = new FormData();
        formData.append("userId", userId);

        const res = await axios({
            method: "POST",
            url: `http://localhost/reactphp-app-backend/Home/reactGetUserData`,
            data: formData,
        });

        const data = res.data;
        const flag = data[0];

        if (flag === 1) {
            const userData = data[1][0];
            const userName = `${userData.fname} ${userData.lname}`;
            const userEmail = userData.email;
            const userPhonenumber = userData.phone_number;
            const userCity = userData.city;
            const userRole = userData.role;

            this.setUserFormUserid(userId);
            this.setUserFormName(userName);
            this.setUserFormEmail(userEmail);
            this.setUserFormPhonenumber(userPhonenumber);
            this.setUserFormCity(userCity);
            this.setUserFormRole(userRole);

            this.setState({ userFormShowHideStatus: "block" });
        } else {
            const msg = data[1];
            this.showAlertModal(msg);
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

        const res = await axios({
            method: "POST",
            url: `http://localhost/reactphp-app-backend/Home/reactDeleteUser`,
            data: formData,
        });

        const data = res.data;
        const flag = data[0];

        if (flag === 1) {
            this.fetchUsers();
            this.setShowUserDeleteModal(-1);
        } else {
            const msg = data[1];
            alert(msg);
        }
    };

    // ## ## ## ## ## //
    setShowUserDeleteModal = (userId) => {
        this.setState({
            userDeleteModalId: userId,
            showUserDeleteModal: !this.state.showUserDeleteModal,
        });
    };

    // ## ## ## ## ## //
    showAlertModal = (msg) => {
        this.setState({
            alertModalMessage: msg,
            showAlertModal: true,
        });
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
                        alert={this.showAlertModal}
                    />
                    <Users
                        users={this.state.users}
                        showUserDeleteModal={this.state.showUserDeleteModal}
                        userDeleteModalId={this.state.userDeleteModalId}

                        getUserData={this.getUserData}
                        deleteUser={this.deleteUser}
                        setShowUserDeleteModal={this.setShowUserDeleteModal}
                    />
                </div>

                <AlertModal
                    message={this.state.alertModalMessage}
                    showAlertModal={this.state.showAlertModal}
                    setShowAlertModal={this.setShowAlertModal}
                />
                <Footer />
            </>
        );
    }
}

export default App;
