import React,{ Component } from 'react'
import {reduxStore} from './dataStore/ReduxStore'
import  {usrClickScreen,counterModify} from './dataStore/Actions'
import picOn from './lightOn.jpg'
import picOff from './lightOff.jpg'

const ItemStyle = {
    'textAlign':'left',
    'height':'100px',
    'weight':'100px',
    'borderRadius':'50px',
    'margin':'5px'
};
export class Item extends Component{
    constructor(props){
        super(props);
        this.imgOnClickedHandler = this.imgOnClickedHandler.bind(this);
        this.state = {blockID:props.blockID,picSrc:picOff};
        reduxStore.subscribe(()=>{
            let newState = reduxStore.getState();
            if(newState.GameMap[this.state.blockID] === 1){
             this.setState({picSrc:picOn});
            }
            else{
                this.setState({picSrc:picOff});
            }
        });
    }
    imgOnClickedHandler(){
        reduxStore.dispatch(usrClickScreen(this.state.blockID));
        reduxStore.dispatch(counterModify(reduxStore.getState().Counter + 1));
    }
    render(){
        return (
            <img src={this.state.picSrc} alt={'lightPicture'} style={ItemStyle} onClick={this.imgOnClickedHandler}>

            </img>
        );
    }
}