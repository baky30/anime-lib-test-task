import {AppDispatch, RootState} from "../store";
import {moviesSlice} from "../reducers/MoviesSlice";

const query = `
    query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          hasNextPage
        }
        media (search: $search) {
          id
          bannerImage
          title {
            userPreferred
            native
          }
        }
      }
    }
`;

export const asyncSearchMovies = (page = 1) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const moviesFromState = getState().moviesReducer.movies ?? []; //movies can be null
    const url = 'https://graphql.anilist.co';
    const variables = {
        search: getState().moviesReducer.searchValue,
        page,
        perPage: 3,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

    try {
        dispatch(moviesSlice.actions.moviesFetching());
        const response = await fetch(url, options);
        const res = await response.json();
        const movies = page > 1 ? [...moviesFromState, ...res.data.Page.media] : res.data.Page.media;
        const { hasNextPage, currentPage } = res.data.Page.pageInfo;

        dispatch(moviesSlice.actions.moviesFetchingSuccess(movies));
        dispatch(moviesSlice.actions.setPageInfo({hasNextPage, currentPage}));
    } catch (e) {
        dispatch(moviesSlice.actions.moviesFetchingError("Failed to fetch"));
    }

}

