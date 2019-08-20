import { combineReducers } from 'redux';

import Contents from './Contents';
import Title from './Title';

import {penderReducer} from 'redux-pender';

export default combineReducers({
    Contents,
    Title,
    pender:penderReducer
});