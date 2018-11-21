import { combineReducers } from 'redux';
import app from 'app/root/reducers';
// import header from 'app/header/reducers';

const appReducer = combineReducers({
    app,
});

export default appReducer;
