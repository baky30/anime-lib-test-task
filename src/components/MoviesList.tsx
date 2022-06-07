import React from 'react';
import {useAppSelector} from "../hooks/redux";
import MovieListItem from "./MovieListItem";
import SkeletonMovieItem from "./SkeletonMovieItem";

const MoviesList = () => {
    const { movies, isLoading, error } = useAppSelector(state => state.moviesReducer);

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3.5"}>
            {movies && movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
            {movies && movies.length === 0 && <p className={"sm:col-span-3 p-5"}>No results found</p>}
            {isLoading && <SkeletonMovieItem count={3} />}
            {error && <p className={"sm:col-span-3 p-5"}>{error}</p>}
        </div>
    );
};

export default MoviesList;
