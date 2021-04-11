import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Users from "./Components/Users";
import Customers from "./Components/Customers";
import NotFound from "./Components/NotFound";
import AlertModal from "./Components/modals/AlertModal";
import DeleteModal from "./Components/modals/DeleteModal";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {
        alertModalShow: false,
        alertModalMessage: "",

        deleteModalId: -1,
        deleteModalShow: false,
        deleteModalType: "",
        deleteModalMessage: "",
    };

    alertModalHandleHide = (msg) => {
        this.setState({
            alertModalShow: !this.state.alertModalShow,
            alertModalMessage: msg,
        });
    };

    render() {
        const { alertModalShow, alertModalMessage };

        return (
            <>
                <Switch>
                    <Route
                        path="/categories"
                        render={() => (
                            <Categories alert={this.alertModalHandleHide} />
                        )}
                    />
                    <Route
                        path="/products"
                        render={() => (
                            <Products alert={this.alertModalHandleHide} />
                        )}
                    />
                    <Route
                        path="/customers"
                        render={() => (
                            <Customers alert={this.alertModalHandleHide} />
                        )}
                    />
                    <Route
                        path="/users"
                        render={() => (
                            <Users alert={this.alertModalHandleHide} />
                        )}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <Users alert={this.alertModalHandleHide} />
                        )}
                    />

                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>

                <AlertModal
                    show={alertModalShow}
                    message={alertModalMessage}
                    onHide={this.alertModalHandleHide}
                />

                <DeleteModal
                    type={deleteModalType}
                    id={deleteModalId}
                    show={deleteModalShow}
                    message={deleteModalMessage}
                    onHide={this.deleteModalHandleHide}
                />
            </>
        );
    }
}

export default App;
