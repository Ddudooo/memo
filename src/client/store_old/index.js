import * as types from '../actions/ActionTypes';
const login = () => {
    
}
const initialState = {
    title: 'Hello world',
    color: 'black',
    interval : false,
    contents:{
        body: 'default body'
    }
};

function main(state = initialState, action){
    switch(action.type){
        case types.SET_COLOR:
            return{
                ...state,
                color : action.color===state.color?'black':action.color
            };
        case types.CHANGE_INTERVAL:
            return{
                ...state,
                interval : !state.interval
            }
        case types.LOGIN:
            return{
                ...state
            }
        default:
            return state;
    }
};

export default main;