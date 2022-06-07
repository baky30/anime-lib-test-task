import React from 'react';
import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import {useAppDispatch} from "../hooks/redux";
import {moviesSlice} from "../store/reducers/MoviesSlice";
import {asyncSearchMovies} from "../store/actions/asyncSearchMovies";


let searchTimeout: ReturnType<typeof setTimeout>;

const SearchInput: React.FC<{ inputValue: string }> = ({ inputValue }) => {
    const dispatch = useAppDispatch();
    const { setSearchValue, clearState } = moviesSlice.actions;

    const onInputChange = (value: string) => {
        clearTimeout(searchTimeout);
        if (value) {
            dispatch(setSearchValue(value));
            searchTimeout = setTimeout(() => {
                dispatch(asyncSearchMovies());
            }, 500)
        } else dispatch(clearState());
    }

    return (
        <div className={"w-[80%] h-14 sm:max-w-[600px] mx-auto mb-8 rounded-md overflow-hidden relative"}>
            <input
                value={inputValue}
                placeholder={"Text here"}
                className={"h-full w-full px-2.5 py-3.5 text-base outline-none"}
                onChange={e => onInputChange(e.target.value)}
            />
            { inputValue &&
                <button
                    className={"absolute -translate-y-1/2 top-1/2 right-4"}
                    onClick={() => dispatch(clearState())}
                >
                    <Cross/>
                </button>
            }
        </div>
    );
};

export default SearchInput;
