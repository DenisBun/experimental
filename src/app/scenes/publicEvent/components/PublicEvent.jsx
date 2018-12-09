import React from 'react';
import CloseIcon from 'static/icons/CloseIcon';
import { Input } from 'app/shared/components/Input';
import { Dropzone } from 'app/shared/components/Dropzone';

import style from './PublicEvent.module.scss';

const PublicEvent = ({ onSubmit }) => {
    return (
        <form className={style.PublicEventContainer} onSubmit={onSubmit}>
            <div className={style.PublicEventHeadlineContainer}>
                <h1 className={style.PublicEventHeadline}>
                    Create Public Event
                </h1>
                <CloseIcon />
            </div>
            <div className={style.PublicEventTitleContainer}>
                <div className={style.titleField}>
                    Title<span className={style.isRequired}>*</span>
                </div>
                <Input />
            </div>
            <div className={style.PublicEventPosterContainer}>
                <div className={style.titleField}>
                    Poster<span className={style.isRequired}>*</span>
                </div>
                <Dropzone />
            </div>
        </form>
    );
};

export default PublicEvent;
