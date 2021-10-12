import {createSelector} from "reselect";

export const getMovies = (state) => {
    return state.moviesPage.movies
};

export const getLimit = (state) => {
    return state.moviesPage.limit
}

export const getTotalMoviesCount = (state) => {
    return state.moviesPage.totalMoviesCount
}

export const getPageNumber = (state) => {
    return state.moviesPage.pageNumber
}

export const getFetching = (state) => {
    return state.moviesPage.isFetching
}

export const getCurrentMoviesId = (state) => {
    return state.moviesPage.currentMoviesId
}

export const getMovieCardInfo = createSelector(getMovies, getCurrentMoviesId, (movies, id) => {
    return movies.filter(movie => movie.id === id)
})

export const getComments = (state) => {
    return state.moviesPage.comments
}


