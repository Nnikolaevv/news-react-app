import React, {useEffect} from 'react';

import NewsItem from "../NewsItem/NewsItem";
import {requestNews} from "../../../state/reducers/news-reducer";
import {useDispatch} from "react-redux";

const NewsPageAll = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestNews())
    },[])

    return (
        <div className='container'>
            <div className='publisher-container'>
             <NewsItem/>
            </div>
        </div>
    );
};

export default NewsPageAll;

