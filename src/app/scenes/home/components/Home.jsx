import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from 'static/icons/CloseIcon';
import ArrowLeftIcon from 'static/icons/ArrowLeftIcon';

import style from './Home.module.scss';

const Home = () => {
    const ArrowElement = (
        <div className={style.eventArrow}>
            <ArrowLeftIcon />
        </div>
    );
    return (
        <div className={style.homeContainer}>
            <div className={style.eventCloseBtn}>
                <CloseIcon />
            </div>
            <h1 className={style.homeHeadline}>Select event type</h1>
            <Link to="/public">
                <div className={style.eventLinkContainer}>
                    <div className={style.eventTitleContainer}>
                        <div className={style.eventTitle}>Public Event</div>
                        <div className={style.eventSubtitle}>
                            Event that all users can see
                        </div>
                    </div>
                    {ArrowElement}
                </div>
            </Link>
            <Link to="/private">
                <div className={style.eventLinkContainer}>
                    <div className={style.eventTitleContainer}>
                        <div className={style.eventTitle}>Private Event</div>
                        <div className={style.eventSubtitle}>
                            Event that can be seen only by link
                        </div>
                    </div>
                    {ArrowElement}
                </div>
            </Link>
        </div>
    );
};

export default Home;
