import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/Navbar";
import MovieForm from './Components/MovieForm';

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {};
    render() {
        return (
            <>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </>
        );
    }
}

export default App;
