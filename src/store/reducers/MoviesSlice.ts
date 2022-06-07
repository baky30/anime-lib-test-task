import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, IPageInfo} from "../../commonInterfaces";

interface IInitialState {
    movies: IMovie[] | null
    favoriteMovies: IMovie[]
    hasNextPage: boolean
    currentPage: number
    searchValue: string
    isLoading: boolean
    error: string
}

const initialState: IInitialState = {
    movies: null,
    favoriteMovies: [],
    hasNextPage: false,
    currentPage: 1,
    searchValue: '',
    isLoading: false,
    error: ''
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setPageInfo(state, action: PayloadAction<IPageInfo>) {
            state.hasNextPage = action.payload.hasNextPage;
            state.currentPage = action.payload.currentPage;
        },
        moviesFetching(state) {
            state.isLoading = true;
        },
        moviesFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.movies = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        moviesFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setFavoriteMovie(state, action: PayloadAction<IMovie>) {
            state.favoriteMovies.push(action.payload);
        },
        removeFavoriteMovie(state, action: PayloadAction<number>) {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload);
        },
        clearState() {
            return initialState
        },
    }
})

export default moviesSlice.reducer;
