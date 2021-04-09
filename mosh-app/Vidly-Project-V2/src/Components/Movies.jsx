import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: null,
        sortColumn: {
            path: "title",
            order: "asc",
        },
    };

    componentDidMount = () => {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

        this.setState({ movies: getMovies(), genres });
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

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    getPageData = () => {
        const {
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn,
            movies: allMovies,
        } = this.state;

        // Filter -> Sort -> Return array
        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
                : allMovies;

        const sorted = _.orderBy(
            filtered,
            [sortColumn.path],
            [sortColumn.order]
        );

        const movies = paginate(sorted, currentPage, pageSize);

        return {
            totalCount: filtered.length,
            data: movies,
        };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn } = this.state;

        if (count === 0)
            return (
                <p className="mt-2 mb-2">
                    There are no movies in the database.
                </p>
            );

        const { totalCount, data: movies } = this.getPageData();

        return (
            <>
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <ListGroup
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>

                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                        <p>Showing {totalCount} movies in the database.</p>

                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                        />

                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
