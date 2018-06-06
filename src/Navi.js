import React,{ Component } from 'react'
import {reduxStore} from './dataStore/ReduxStore'

const NaviStyle = {
    'textAlign':'left',
    'background':'#222',
    'color':'white',
    'height':'40px'
};
export class Navi extends Component{
    constructor(props){
        super(props);
        this.state = {Counter:0};
        reduxStore.subscribe(()=>{
            let newState = reduxStore.getState();
            this.setState({Counter:newState.Counter})
        });
    }
    render(){
        return (
            <nav style={NaviStyle}>
                <span>当前步数：{this.state.Counter}</span>
            </nav>
        );
    }
}