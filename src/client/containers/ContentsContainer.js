import Contents from '../components/Contents';
import * as contentsActions from  '../modules/Contents';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// const mapStateToProps = (state)=>({
//     contents: state.contents.body
// })

// const mapDispatchToProps = (dispatch) => ({
//     onSetColor : () =>{
//         const color = getRandomColor();        
//         dispatch(actions.setColor(color));    
//     },
//     onChangeInterval : ()=>{
//         dispatch(actions.changeInterval())
//     },
//     onLogin : () => {
//         dispatch(actions.login())
//     }
// })

const ContentsContainer = connect(
    (state)=>({
        contents : state.Contents.contents,
        status : state.Contents.status,
        pending : state.Contents.pending,
    }),
    (dispatch)=>({
        ContentsActions : bindActionCreators(contentsActions, dispatch)
    })
)(Contents);

export default ContentsContainer;