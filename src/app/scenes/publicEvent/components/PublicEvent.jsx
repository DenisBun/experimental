import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import CloseIcon from 'static/icons/CloseIcon';
import { Input } from 'app/shared/components/Input';
import { Dropzone } from 'app/shared/components/Dropzone';

import style from './PublicEvent.module.scss';

const required = value => (value ? undefined : 'Required');

const focusOnError = createDecorator();

const PublicEvent = ({ onSubmit, onInputChange, titleValue }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={values => {}}
            decotarors={[focusOnError]}
        >
            {({ handleSubmit, submitting }) => (
                <form
                    onSubmit={handleSubmit}
                    className={style.PublicEventContainer}
                >
                    <div className={style.PublicEventHeadlineContainer}>
                        <h1 className={style.PublicEventHeadline}>
                            Create Public Event
                        </h1>
                        <CloseIcon />
                    </div>
                    <Field name="Title" placeholder="Title" validate={required}>
                        {({ input, meta, placeholder }) => (
                            <div>
                                <label>Title</label>
                                <input {...input} placeholder={placeholder} />
                                {meta.error && meta.touched && (
                                    <span>{meta.error}</span>
                                )}
                            </div>
                        )}
                    </Field>
                    <Input
                        headline="Title"
                        isRequired
                        onChange={onInputChange}
                        value={titleValue}
                    />
                    <div className={style.PublicEventPosterContainer}>
                        <div className={style.titleField}>
                            Poster<span className={style.isRequired}>*</span>
                        </div>
                        <Dropzone />
                    </div>
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                </form>
            )}
        </Form>
    );
};

export default PublicEvent;
