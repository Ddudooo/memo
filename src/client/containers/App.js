import React,{Component} from 'react';
import  {connect} from 'react-redux';

import TitleContainer from './TitleContainer';
import ContentsContainer from './ContentsContainer';

class App extends Component{    

    isLogin = () => {
        return ( 
            this.props.loginStatus === 'LOGIN' 
            ?
            <p>LOGIN SUCCESS</p>
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
    null    
)(App);