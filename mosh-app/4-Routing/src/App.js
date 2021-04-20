import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="content">
                    <Switch>
                        <Route
                            path="/products/:id"
                            component={ProductDetails}
                        />
                        <Route path="/posts/:year?/:month?" component={Posts} />

                        <Route path="/products" component={Products} />
                        <Route path="/admin" component={Dashboard} />

                        <Redirect from="/messages" to="/posts" />

                        <Route path="/" exact component={Home} />

                        <Route path="/not-found" component={NotFound} />
                        <Redirect to="/not-found" />

                        {/* If we need to pass props to a component, we need to use render instead of component */}
                        {/* <Route path="/products" render={(props) => <Products passProp="here" {...props} />} /> */}
                    </Switch>

                    {/* exact attribute will make the path be exactly selected, not only if contained within URL */}
                    {/* <Route path="/" exact component={Home} /> */}
                </div>
            </div>
        );
    }
}

export default App;
