export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const error = message => ({
    type: ERROR,
    payload: {
        message,
    },
});

export const clearError = () => ({
    type: CLEAR_ERROR,
});
