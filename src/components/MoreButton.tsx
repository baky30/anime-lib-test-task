import React from 'react';
import { ReactComponent as ArrowRight } from "../assets/icons/ArrowRight.svg";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {asyncSearchMovies} from "../store/actions/asyncSearchMovies";

const MoreButton = () => {
    const { hasNextPage, currentPage } = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    return (
        <button
            className={"px-8 py-3 bg-green rounded-md flex items-center mx-auto disabled:opacity-50"}
            disabled={!hasNextPage}
            onClick={() => dispatch(asyncSearchMovies(currentPage + 1))}
        >
            <span className={"mr-5 text-lg"}>MORE</span>
            <ArrowRight />
        </button>
    );
};

export default MoreButton;
