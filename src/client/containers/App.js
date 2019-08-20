import React,{Component} from 'react';
import TitleContainer from './TitleContainer';
import ContentsContainer from './ContentsContainer';

class App extends Component{
    render() {
        return (
            <div>
                <TitleContainer/>
                <ContentsContainer/>
            </div>
        );
    }
}

export default App;