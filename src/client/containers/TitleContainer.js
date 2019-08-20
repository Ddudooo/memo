import Title from '../components/title';
import * as titleActions from  '../modules/Title';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const TitleContainer = connect(
    (state) => ({
        title: state.Title.title,
        color : state.Title.color,
        colorInterval : state.Title.interval
    }),
    (dispatch) => ({
        TitleActions : bindActionCreators(titleActions, dispatch)
    })
)(Title);

export default TitleContainer;