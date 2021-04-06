import React, { Component } from "react";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;

        this.setState({ movies });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0)
            return (
                <p className="mt-2 mb-2">
                    There are no movies in the database.
                </p>
            );

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <>
                <p className="mt-2 mb-2">
                    Showing {count} movies in the database.
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th className="text-center">Liked</th>
                            <th className="text-center">Options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td className="text-center">
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </>
        );
    }
}

export default Movies;
