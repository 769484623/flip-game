import React, { Component } from 'react';
import {Item} from './Item'
import {Button,Modal} from 'antd'
import {Navi} from './Navi'
import {reduxStore} from "./dataStore/ReduxStore";
import {changeGameState} from "./dataStore/Actions";

import '../node_modules/antd/dist/antd.css'

const divStyle = {
    'textAlign':'center',
};

class App extends Component {
    constructor(props){
        super(props);
        this.playField = [];
        for(let i = 0;i < 4;i++)
        {
            let Arr = [];
            for(let k = 0;k < 4;k++)
            {
                Arr[k] = React.createElement(Item,{key:i * 4+ k,blockID:i * 4+ k})
            }
            this.playField[i]= React.createElement('div',{key:'container' + i},Arr)
        }
        this.restartTheGame = this.restartTheGame.bind(this);
        reduxStore.subscribe(()=>{
            let newState = reduxStore.getState();
            if(newState.GameState === 1){
                Modal.success(
                    {
                        title: '恭喜，你获胜了',
                        content: '恭喜你！你赢得了比赛！'
                    })
            }
        });
    }
    restartTheGame(){
        reduxStore.dispatch(changeGameState())
    }
    render() {
        return (
            <div style={divStyle}>
                <nav>
                    <Navi />
                </nav>
                <main>
                    <br/>
                    <div id={'play-board'}>
                        {this.playField}
                    </div>
                    <br/>
                    <Button onClick={this.restartTheGame}>重新开始</Button>
                </main>
            </div>
        );
    }
}

export default App;
