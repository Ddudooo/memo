import {createStore, applyMiddleware} from 'redux';
import modules from './modules';

// import {createLogger} from 'redux-logger';

import pendingMiddleware from 'redux-pender';

// const logger = createLogger();

const store = createStore(modules, applyMiddleware(/**logger, */ pendingMiddleware()));

export default store;