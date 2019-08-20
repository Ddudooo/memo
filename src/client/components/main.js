import React from 'react';
import PropTypes from 'prop-types';

const Main = ({title,color, onSetColor}) =>{
    return(
        <div
        className="main"
        >
        <h1 
        className="title"
        style={{
            color:color
        }}
        onClick={onSetColor}
        >{title}</h1>
        React components
        </div>
    );
}

Main.propTypes = {
    title: PropTypes.string,
    color : PropTypes.string,
    onSetColor: PropTypes.func
}

Main.defaultProps = {
    title : 'Hello world',
    color : 'black',
    onSetColor : () => console.log('onSetColor not definded')
}

export default Main;