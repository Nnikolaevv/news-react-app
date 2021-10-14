import React, {useEffect, useState} from 'react';
import {requestNews, setResetNews} from "../../../state/reducers/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import {useHistory} from "react-router-dom";
import {getCurrentPublisher} from "../../../state/selectors/newsSelector";

const NewsPagePublisher = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentPublisher = useSelector(getCurrentPublisher)

    useEffect(() => {
        history.push({
            pathname: `/publisher/${currentPublisher}`
        })
    },[])


    useEffect(() => {
        dispatch(requestNews(currentPublisher))
    },[currentPublisher])


    return (
        <div className='container'>
            <div className='publisher-container'>
                <NewsItem/>
            </div>
        </div>
    );
};

export default NewsPagePublisher;
