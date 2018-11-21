import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import store from 'app/store';

// https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
import history from 'services/history';

import { AppContainer } from 'app/root/components';
import routes from './routes';

const Root = () => (
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL} history={history}>
            <AppContainer>{routes}</AppContainer>
        </Router>
    </Provider>
);

export default hot(module)(Root);
