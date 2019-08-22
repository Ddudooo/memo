import {handleActions, createAction} from 'redux-actions';

import axios from 'axios';
import { pender } from 'redux-pender/lib/utils';

function postLogin(userID, userPW){
    const url = '/login';
    console.log(url);
    console.log('axios post method');
    return axios({
        method: 'post',
        url : url,
        data : {
            id: userID,
            pw : userPW
        }
    });
}

function logout(token){
    const url = '/logout';
    console.log(url);
    console.log('axios logout method');
    return axios({
        method: 'post',
        url : url,
        data : {
            token: token
        }
    });
};

const REQUEST_AUTH = 'REQUEST_AUTH';
const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
const COOKIE_CHECK = 'COOKIE_CHECK';

export const requestAuth = createAction(REQUEST_AUTH,postLogin);
export const requestLogout = createAction(REQUEST_LOGOUT);
export const cookieCheck = createAction(COOKIE_CHECK);

const initialState= {
    pending:false,
    contents: 'Please Login first',
    // error:false,
    token: '',
    status: 'NONE'
}

export default handleActions({
    [COOKIE_CHECK]:(state,action)=>{
        // console.log("TOKEN CHECK"+localStorage.getItem('token'));
        return {
            ...state,
            status: sessionStorage.getItem('token')?'LOGIN':'NONE'
        }
    },
    [REQUEST_LOGOUT]:(state,action)=>{        
        sessionStorage.clear();
        logout(state.token);
        return{
            ...state,
            contents: 'Please Login first',
            token: '',
            status: 'NONE',
        }
    },
    ...pender({
        type: REQUEST_AUTH,
        onPending: (state, action) => {
            console.log("PEDING LOGIN");
            return {
                ...state,
                pending : true,
                contents: 'Check your information...'
            }
        },
        onFailure: (state, action) => {
            console.log("FAILURE LOGIN");
            return {
                ...state,
                pending: false,
                contents: 'Please check inforamtion',
                status: 'FAILURE'
            }
        },
        onSuccess: (state, action) => {
            const {token} = action.payload.data;
            console.log("SUCCESS LOGIN");
            sessionStorage.setItem('token', token);
            return {
                ...state,
                pending: false,
                contents: 'Success',
                token : token,
                status : 'LOGIN'
            }
        },
        onCancel: (state, action) => {
            console.log("CANCELED LOGIN");
            return {
                ...state,
                pending: false,
                token : '',
                status : 'CANCEL'
            }
        }
    })
}, initialState);