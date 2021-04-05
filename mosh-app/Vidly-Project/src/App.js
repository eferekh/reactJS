import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./Components/Movies";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
    };

    handleDelete = (movieId) => {
        const newMovies = [...this.state.movies];

        newMovies.forEach((movie, i) => {
            if (movie._id === movieId) {
                newMovies.splice(i, 1);
            }
        });

        this.setState({ movies: newMovies });
    };

    handleLikeClick = (movie) => {
        const newMovies = [...this.state.movies];

        newMovies.forEach(thisMovie => {
            if (thisMovie._id === movie._id) {
                thisMovie.liked = !thisMovie.liked;
            }
        });

        this.setState({ movie: newMovies });
    };

    getInitialText = () => {
        const moviesLength = this.state.movies.length;
        let paraText = "";

        if (moviesLength > 0) {
            paraText = `Showing ${moviesLength} movies in the database.`;
        } else {
            paraText = `No movies found in the database.`;
        }

        return paraText;
    };

    componentDidMount = () => {
        const movies = getMovies();
        this.setState({ movies });
    };

    render() {
        return (
            <>
                <div className="container">
                    <p className="mt-3 mb-3">
                        {this.getInitialText()}
                    </p>

                    {this.state.movies.length > 0 ? (
                        <Movies
                            movies={this.state.movies}
                            onDelete={this.handleDelete}
                            onLikeClick={this.handleLikeClick}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </>
        );
    }
}

export default App;
