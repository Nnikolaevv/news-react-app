import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import NewsPageAll from "./NewsPageAll/NewsPageAll";
import NewsPagePublisher from "./NewsPagePublisher/NewsPagePublisher";
import {useDispatch, useSelector} from "react-redux";
import {requestNews, setResetNews} from "../../state/reducers/news-reducer";
import {getCurrentPublisher} from "../../state/selectors/newsSelector";

const NewsPage = () => {
    const dispatch = useDispatch()
    const publisher = useSelector(getCurrentPublisher)

    useEffect(() => {
        dispatch(setResetNews())
    }, )

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return function () {
            document.removeEventListener('scroll', handleScroll)
        }
    },[publisher])

    const handleScroll = (event) => {
        const {scrollHeight, scrollTop} = event.target.documentElement
        const innerHeight = window.innerHeight
        if (scrollHeight - (scrollTop + innerHeight) < 100) {
            dispatch(requestNews(publisher, 10))
        }
    }

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <NewsPageAll/>
                </Route>
                <Route path='/publisher/:publisherId'>
                    <NewsPagePublisher/>
                </Route>
            </Switch>
        </div>
    );
};

export default NewsPage;