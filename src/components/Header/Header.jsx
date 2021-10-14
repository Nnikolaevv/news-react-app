import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPublisher} from "../../state/reducers/news-reducer";

const Header = () => {
    const dispatch = useDispatch()

    const toPublisher = (publisher) => {
        dispatch(setPublisher(publisher))
    }

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to='/' onClick={() => toPublisher(0)}>All News</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to='/publisher/50' onClick={() => toPublisher(50)} className='btn'> Publisher-50</Link>
                        </li>
                        <li>
                            <Link to='/publisher/236' onClick={() => toPublisher(236)} className='btn'> Publisher-236 </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;