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

const REQUSET_AUTH = 'REQUSET_AUTH';

export const requsetAuth = createAction(REQUSET_AUTH,postLogin);

const initialState= {
    pending:false,
    contents: 'Please Login first',
    // error:false,
    token: '',
    status: 'NONE'
}

export default handleActions({
    ...pender({
        type: REQUSET_AUTH,
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