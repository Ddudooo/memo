import React,{Component} from 'react';
import  {connect} from 'react-redux';

import TitleContainer from './TitleContainer';
import ContentsContainer from './ContentsContainer';
import * as contentsActions from  '../modules/Contents';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { bindActionCreators } from 'redux';




class App extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.props.ContentsActions.cookieCheck();
    }    

    isLogin = () => {
        return ( 
            this.props.loginStatus === 'LOGIN' 
            ?
            <p
            onClick={()=>{this.props.ContentsActions.requestLogout()}}
            >LOGIN SUCCESS
            </p>
            : 
            <ContentsContainer/>
            )
    }

    render() {        
        // console.log({loginStatus})
        // console.log({loginStatus});
        
        return (
            <div>
                <TitleContainer/>
                {this.isLogin()}
            </div>
        );
    }
}

export default connect(
    (state) =>{        
        return({            
            loginStatus: state.Contents.status
        })
    },
    (dispatch) =>{
        return({
            ContentsActions : bindActionCreators(contentsActions, dispatch)
        })
    }
)(App);