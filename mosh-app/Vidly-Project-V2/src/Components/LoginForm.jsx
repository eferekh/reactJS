// npm install joi-browser

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/Input";

class LoginForm extends Component {
    // username = React.createRef();

    state = {
        account: {
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

    validate = () => {
        // If abortEarly property is true, Joi will return the first validation error found and ignore the rest
        const options = { abortEarly: false };
        const { error } = Joi.validate(
            this.state.account,
            this.schema,
            options
        );

        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    // validate = () => {
    //     // Basic Validation
    //     const errors = {};
    //     const { account } = this.state;

    //     if (account.username.trim() === "") {
    //         errors.username = "Username is required.";
    //     }

    //     if (account.password.trim() === "") {
    //         errors.password = "Password is required.";
    //     }

    //     return Object.keys(errors).length === 0 ? null : errors;
    //     // Object.keys returns an array of the object keys,
    //     // in this case ["username", "password"]
    // };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors ? errors : {} });
        if (errors) return;

        // -- Accessing the DOM in Vanilla Javascript
        // const username = document.querySelector("#username").value;
        // -- Accessing the DOM in React
        // const username = this.username.current.value;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };

        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

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

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({ account, errors });
    };

    render() {
        const { account, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />

                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />

                    <button type="submit" className="btn btn-primary" disabled={this.validate()}>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
