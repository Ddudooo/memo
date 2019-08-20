import * as types from '../actions/ActionTypes';

const initialState = {
    title: 'Hello world',
    color: 'black'
};

function main(state = initialState, action){
    switch(action.type){
        case types.SET_COLOR:
            return{
                ...state,
                color : action.color
            };
        default:
            return state;
    }
};

export default main;