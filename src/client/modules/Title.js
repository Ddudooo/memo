import {handleActions, createAction} from 'redux-actions';

const SET_COLOR = 'SET_COLOR';
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

export const setColor = createAction(SET_COLOR);
export const changeInterval = createAction(CHANGE_INTERVAL);

const initialState = {
    title: 'Duck structure',
    color: 'black',
    interval : false,
    contents:{
        body: 'default body'
    }
};

export default handleActions({
    [SET_COLOR]:(state,action)=>({        
        ...state,
        color : action.payload===state.color?'black':action.payload
    }),
    [CHANGE_INTERVAL]:(state,action) => ({
        ...state,
        interval : !state.interval
    })
}, initialState)