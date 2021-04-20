import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Counters from "./Components/Counters.jsx";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    handleIncrement = (theCounter) => {
        const newCounters = [...this.state.counters];

        newCounters.forEach((counter) => {
            if (counter.id === theCounter.id) {
                counter.value += 1;
            }
        });

        this.setState({ counters: newCounters });
    };

    handleDecrement = (theCounter) => {
        const newCounters = [...this.state.counters];

        newCounters.forEach((counter) => {
            if (counter.id === theCounter.id) {
                counter.value -= 1;
            }
        });

        this.setState({ counters: newCounters });
    };

    handleDelete = (theCounter) => {
        const oldCounters = [...this.state.counters];
        const newCounters = oldCounters.filter(counter => counter.id !== theCounter.id);

        this.setState({ counters: newCounters });
    };

    handleReset = () => {
        const newCounters = [...this.state.counters];

        newCounters.forEach(counter => {
            counter.value = 0;
        });

        this.setState({ counters: newCounters });
    }

    render() {
        return (
            <>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(
                            (counter) => counter.value > 0
                        ).length
                    }
                />

                <div className="container">
                    <button className="btn btn-primary m-2" onClick={this.handleReset}>Reset</button>

                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </div>

                <Footer />
            </>
        );
    }
}

export default App;
