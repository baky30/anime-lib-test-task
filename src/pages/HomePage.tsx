import React from 'react';
import SearchInput from "../components/SearchInput";
import TextH1 from "../components/TextH1";
import MoviesList from "../components/MoviesList";
import MoreButton from "../components/MoreButton";
import FavoriteMoviesList from "../components/FavoriteMoviesList";
import {useAppSelector} from "../hooks/redux";

const HomePage = () => {
    const inputValue = useAppSelector(state => state.moviesReducer.searchValue);

    return (
        <div className={"sm:w-[70%] mx-auto text-center"}>
            <TextH1 className={"my-6"}>Список аниме</TextH1>
            <SearchInput inputValue={inputValue} />
            { inputValue &&
                <>
                    <MoviesList  />
                    <MoreButton />
                    <FavoriteMoviesList />
                </>
            }
        </div>
    );
};

export default HomePage;
