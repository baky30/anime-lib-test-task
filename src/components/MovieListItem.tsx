import React from 'react';
import {IMovie} from "../commonInterfaces";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {moviesSlice} from "../store/reducers/MoviesSlice";

const MovieListItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
    const favoriteMovies = useAppSelector(state => state.moviesReducer.favoriteMovies)
    const dispatch = useAppDispatch();
    const { setFavoriteMovie, removeFavoriteMovie } = moviesSlice.actions;
    const checkIsFavorite = favoriteMovies.some(m => m.id === movie.id);

    const onHeartClick = () => {
        if (checkIsFavorite) dispatch(removeFavoriteMovie(movie.id));
        else dispatch(setFavoriteMovie(movie));
    }

    return (
        <div className={"bg-white relative"}>
            <img
                src={movie.bannerImage ? movie.bannerImage : "https://picsum.photos/400/180"}
                className={"min-w-full h-[180px] object-cover"}
                alt={""}
            />
            <div className={"py-4 px-9"}>
                <p>{movie.title.userPreferred}</p>
                <p>{movie.title.native}</p>
            </div>
            <button className={"absolute bottom-4 right-3"} onClick={onHeartClick}>
                <img
                    src={checkIsFavorite
                    ? require("../assets/icons/HeartFilled.png")
                    : require("../assets/icons/HeartOutline.png")}
                    alt={""}
                />
            </button>
        </div>
    );
};

export default MovieListItem;
