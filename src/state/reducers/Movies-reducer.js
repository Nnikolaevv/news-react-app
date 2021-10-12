import {moviesApi} from "../../api/api";

const SET_MOVIES = 'movies/SET_MOVIES';
const SET_PAGE_NUMBER = 'movies/SET_PAGE_NUMBER';
const SET_TOTAL_MOVIES_COUNT = 'movies/SET_TOTAL_MOVIES_COUNT';
const SET_IS_FETCHING = 'movies/SET_IS_FETCHING';
const SET_CURRENT_MOVIES_ID = 'movies/SET_MOVIES_ID';
const SET_COMMENT = 'movies/SET_COMMENT';
const DELETE_COMMENT = 'movies/DELETE_COMMENT';

const initialState = {
    movies: [],
    limit: 15,
    totalMoviesCount: 0,
    pageNumber: 1,
    isFetching: true,
    currentMoviesId: null,
    comments: [
        {id: 1, comment: 'Some comments'}
    ],
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.moviesList
            };
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.page
            }
        case SET_TOTAL_MOVIES_COUNT:
            return {
                ...state,
                totalMoviesCount: action.count
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }
        case SET_CURRENT_MOVIES_ID: {
            return {
                ...state,
                currentMoviesId: action.id
            }
        }
        case SET_COMMENT: {
            const newComments = {
                id: state.comments.length + 1,
                comment: action.comment,
            }
            return {
                ...state,
                comments: [...state.comments, newComments]
            }
        }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
        default:
            return state;
    }
}

const setMovies = (moviesList) => ({type: SET_MOVIES, moviesList});
export const setPageNumber = (page) => ({type: SET_PAGE_NUMBER, page});
const setTotalMoviesCount = (count) => ({type: SET_TOTAL_MOVIES_COUNT, count});
const isFetching = (boolean) => ({type: SET_IS_FETCHING, boolean});
export const setCurrentMoviesId = (id) => ({type: SET_CURRENT_MOVIES_ID, id});
export const setComment = (comment) => ({type: SET_COMMENT, comment});
export const deleteComment = (id) => ({type: DELETE_COMMENT, id})


export const requestMovies = (limit, page) => async (dispatch) => {
    dispatch(isFetching(true))
    const moviesListResponse = await moviesApi.getMovies(limit, page)

    dispatch(setMovies(moviesListResponse.data.movies))
    dispatch(setTotalMoviesCount(moviesListResponse.data.movie_count))
    dispatch(isFetching(false))

}


export default moviesReducer;



