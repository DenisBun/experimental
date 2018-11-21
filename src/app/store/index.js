import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const logger = createLogger();

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const middleware = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(reducers, middleware);

export default store;
