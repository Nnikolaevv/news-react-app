import {JsAPI} from "../../api/api";

const SET_NEWS = 'news/SET_NEWS';
const SET_CURRENT_PUBLISHER = 'news/SET_CURRENT_PUBLISHER';
const SET_RESET_NEWS = 'news/SET_RESET_NEWS'

const initialState = {
    news: [],
    currentPublisher: null,
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.newsList]
            };
        case SET_CURRENT_PUBLISHER:
            return {
                ...state,
                currentPublisher: action.publisher
            }
        case SET_RESET_NEWS:
            return {
                ...state,
                news: [],
            }
        default:
            return state;
    }
}

const setNews = (newsList) => ({type: SET_NEWS, newsList});
export const setPublisher = (publisher) => ({type: SET_CURRENT_PUBLISHER, publisher});
export const setResetNews = () => ({type: SET_RESET_NEWS})

export const requestNews = (publisher, count) =>  async (dispatch) => {
    await api.getNews(publisher, count , dispatch)
}

const api =  {
    getNews(publisher = 0, count = 50,  dispatch) {
        return (
            JsAPI.Dao.getArticles({
                "block_id": 84683, // Системный ID, не менять
                "count": count, // Кол-во
                "publisher": publisher, // Задает фильтр по источнику статьи
                "fields": JsAPI.Dao.ArticleField.TITLE
                    | JsAPI.Dao.ArticleField.PUBLISHER_ID
                    | JsAPI.Dao.ArticleField.PUBLISHER_LOGO_URL
                    | JsAPI.Dao.ArticleField.PUBLISHER_NAME
                    | JsAPI.Dao.ArticleField.PUBLISHER_ID
                    | JsAPI.Dao.ArticleField.URL,

            }, function(articles) {
                // статьи находятся в массиве articles
                // article.id - уникальный ID
                // article.title  - заголовок
                // article.publisher_logo_url  - logo URL
                console.log(articles)
                dispatch(setNews(articles)) ;

            }, function(reason) {
                // Error
                console.warn(reason);
            })
        )
    }
}
