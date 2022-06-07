import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import {moviesSlice} from "../store/reducers/MoviesSlice";
import TextH1 from "./TextH1";

const FavoriteMoviesList = () => {
    const movies = useAppSelector(state => state.moviesReducer.favoriteMovies);
    const dispatch = useAppDispatch();
    const removeFavoriteMovie = moviesSlice.actions.removeFavoriteMovie;

    return (
        <>
            { !!movies.length && <TextH1 className={"my-4"}>Любимое аниме</TextH1> }
            <div className={"grid grid-cols-1 sm:grid-cols-3 gap-3 pb-10"}>
                { movies.map(movie => (
                    <div className={"bg-white flex h-52 relative"}>
                        <img
                            src={movie.bannerImage ? movie.bannerImage : "https://picsum.photos/400/180"}
                            className={"w-[40%] min-h-full object-cover"}
                            alt={""}
                        />
                        <p className={"mt-7 px-9"}>{movie.title.userPreferred}</p>
                        <button
                            className={"absolute bottom-4 right-3"}
                            onClick={() => dispatch(removeFavoriteMovie(movie.id))} >
                            <Cross />
                        </button>
                    </div>
                )) }
            </div>
        </>
    );
};

export default FavoriteMoviesList;
