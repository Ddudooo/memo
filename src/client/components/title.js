import React from 'react';

const Title = ({title,color, colorInterval, TitleActions}) =>{
    console.log(colorInterval);

    const getRandomColor = () =>{
        const colors = [
            '#495057',
            '#f03e3e',
            '#d6336c',
            '#ae3ec9',
            '#7048e8',
            '#4263eb',
            '#1c7cd6',
            '#1098ad',
            '#0ca678',
            '#37b24d',
            '#74b816',
            '#f59f00',
            '#f76707'
        ];
        let colorIndex=Math.floor(Math.random()*13);    
        console.log(Math.random()*13);
        console.log(colors[colorIndex]);
        return colors[colorIndex];
    }

    if(colorInterval){
        setTimeout(() => {
            TitleActions.setColor(getRandomColor());
        }, 3000);
    }
    return(
            <h1 
            className="title"
            style={{
                color:color
            }}
            onClick={()=>{
                console.log("clicked");
                return TitleActions.setColor(getRandomColor());
            }}
            onContextMenu={(e)=>{
                e.preventDefault();
                TitleActions.changeInterval();
            }}
            >{title}</h1>
    );
}

export default Title;