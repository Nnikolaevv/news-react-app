import {createSelector} from "reselect";

export const getNews = (state) => {
    return state.newsPage.news
};

export const getCurrentPublisher = (state) => {
    return state.newsPage.currentPublisher
};



// export const getMovieCardInfo = createSelector(getMovies, getCurrentMoviesId, (movies, id) => {
//     return movies.filter(movie => movie.id === id)
// })
//
