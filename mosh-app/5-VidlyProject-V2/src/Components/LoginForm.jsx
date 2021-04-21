// npm install joi-browser

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/Input";
import Form from "./common/Form";

class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
        },
        errors: {
            // username: "Username is required.",
        },
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    componentDidMount = () => {
        // -- Focus on an input through Refs
        // this.username.current.focus();
    };

    doSubmit = () => {
        // Call The Server
        console.log("Submitted");
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    };

    // username = React.createRef();
    // -- Accessing the DOM in Vanilla Javascript
    // const username = document.querySelector("#username").value;
    // -- Accessing the DOM in React
    // const username = this.username.current.value;


    // validate = () => {
    //     // Basic Validation
    //     const errors = {};
    //     const { data } = this.state;

    //     if (data.username.trim() === "") {
    //         errors.username = "Username is required.";
    //     }

    //     if (data.password.trim() === "") {
    //         errors.password = "Password is required.";
    //     }

    //     return Object.keys(errors).length === 0 ? null : errors;
    //     // Object.keys returns an array of the object keys,
    //     // in this case ["username", "password"]
    // };


    // validateProperty = ({ name, value }) => {
    //     if (name === "username") {
    //         if (value.trim() === "") return "Username is required.";
    //         // ...
    //     }

    //     if (name === "password") {
    //         if (value.trim() === "") return "Password is required.";
    //         // ...
    //     }
    // };

}

export default LoginForm;
