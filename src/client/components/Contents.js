import React, {useState, useEffect} from 'react';
import {css} from '@emotion/core';
import {BeatLoader} from 'react-spinners';
import PropTypes from 'prop-types';

const override = css`
    display:block;
    text-align:center;
    margin: 0 auto;
    border-color : red;
`;


const Contents = ({contents, pending,ContentsActions}) =>{
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    let loginForm;
    if(pending){
        loginForm=
        <div className='sweet-loading'>
            <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={30}
            color={'#333333'}
            loading={pending}
            />
        </div>;
    }else{
        loginForm =
        <div>
            <div>
                <span>id</span>
                <input
                type="text"
                value={id}
                onChange={e=>setId(e.target.value)}
                >
                </input>
            </div>
            <div>
                <span>pw</span>
                <input
                type="password"
                value={pw}
                onChange={e=>setPw(e.target.value)}
                >
                </input>
            </div>
            <button
            onClick={()=>{
                return ContentsActions.requsetAuth(id,pw);
            }
            }>
                login
            </button>  
        </div>;

    }
    return(
            <div 
            className="contents"
            >{contents}
            {loginForm}               
            </div>
    );
}

Contents.propTypes = {
    contents: PropTypes.string,
    onLogin : PropTypes.func
}

Contents.defaultProps = {
    contents: 'test msg',
    onLogin: ()=>console.log("onLogin is not definded")
}

export default Contents;