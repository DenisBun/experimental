import { ERROR, CLEAR_ERROR } from '../actions';

const initialState = {
    errorMessage: undefined,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR: {
            return { ...state, errorMessage: action.payload.message };
        }

        case CLEAR_ERROR: {
            return { ...state, errorMessage: '' };
        }

        default:
            return state;
    }
};

export default reducer;
