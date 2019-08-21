import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import modules from './modules';

// import {createLogger} from 'redux-logger';

import pendingMiddleware from 'redux-pender';

// const logger = createLogger();

const store = createStore(
    modules,
    //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(
        applyMiddleware(/**logger, */ pendingMiddleware()),
    )
    );

export default store;