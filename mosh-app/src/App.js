import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    render() { 
        return (
            <React.Fragment>
                {/* <NavBar totalCounters={this.state.counters.length} /> */}
                <NavBar 
                    totalCounters={this.state.counters.filter(c => c.value > 0).length} 
                />
                <main className="container">
                    <Counters 
                        onReset={this.handleReset} 
                        onIncrement={this.handleIncrement} 
                        onDelete={this.handleDelete} 
                        counters={this.state.counters} 
                    />
                </main>
            </React.Fragment>
        );
    }

    handleIncrement = (counter) => {
        // let counters = this.state.counters;
        // let index = counters.indexOf(counter);
        // counters[index] = {...counter};
        // counters[index].value++;
        // this.setState({counters});


        // let counters = this.state.counters;
        // for (let i = 0; i < counters.length; i++) {
        //     if (counters[i].id === counter.id) {
        //         counters[i].value++;
        //     }
        // }
        // this.setState({counters});


        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleReset = () => {
        let counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters});
    };

    handleDelete = (counterId) => {
        // let counters = [];
        // for (let i = 0; i < this.state.counters.length; i++) {
        //     let thisCounter = this.state.counters[i];
        //     if (thisCounter.id !== counterId) {
        //         counters.push(this.state.counters[i])
        //     }
        // }
        // this.setState({counters});

        let counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState({counters}); // Or this.setState({counters: counters});
    };
}

export default App;



// class App extends Component {
//     render() { 
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome To React</h1>
//                 </header>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </div>
//         );
//     }
// }

// export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
