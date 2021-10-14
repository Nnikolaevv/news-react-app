import React from 'react';
import {useSelector} from "react-redux";
import {getNews} from "../../../state/selectors/newsSelector";

const NewsItem = () => {
    const news = useSelector(getNews)
    return (
        <>
            {news.map(n => (
                    <div key={n.id} className='publisher-item' onClick={() => window.open(n.url)} >
                        <img src={n.publisher_logo_url} alt="logo"/>
                        <span> {n.title}</span>
                    </div>
                )
            )}
        </>
    );
};

export default NewsItem;