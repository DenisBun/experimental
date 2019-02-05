import React from 'react';
import PropTypes from 'prop-types';

import style from './Input.module.scss';

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
};

const defaultProps = {
    placeholder: null,
    onBlur: null,
};

const Input = ({
    value,
    onChange,
    placeholder,
    onBlur,
    headline,
    isRequired,
}) => {
    return (
        <div className={style.inputContainer}>
            <div className={style.headline}>
                {headline}
                {isRequired && <span className={style.isRequired}>*</span>}
            </div>
            <div className={style.InputWrapper}>
                <input
                    value={value}
                    onChange={(e) => onChange(e, 'required.title')}
                    onBlur={onBlur}
                    className={style.Input}
                    type="text"
                    placeholder={placeholder}
                />
                <span className={style.focusBorder} />
            </div>
        </div>
    );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
