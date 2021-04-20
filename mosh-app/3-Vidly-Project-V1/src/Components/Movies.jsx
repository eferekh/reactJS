import React, { Component } from 'react';
import Like from "./Like";

class Movies extends Component {
    render() { 
        const { movies, onDelete, onLikeClick } = this.props;

        return (
            <div className="moviesContainer">

                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th className="text-center">Stock</th>
                            <th className="text-center">Rate</th>
                            <th className="text-center">Liked</th>
                            <th className="text-center">Options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movies.map(movie => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td className="text-center">{movie.numberInStock}</td>
                                    <td className="text-center">{movie.dailyRentalRate}</td>
                                    <td className="text-center">
                                        <Like liked={movie.liked} onClick={() => onLikeClick(movie)} />
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie._id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;