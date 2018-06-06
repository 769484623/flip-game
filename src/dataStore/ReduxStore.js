import {createStore} from 'redux';
import  {AppReducers} from './Reducer'

function getGameMap() {
    let arr = new Array(16);
    for(let i = 0;i < 16;i++){
        arr[i] = 0;
    }
    return arr;
}

export let reduxStore = createStore(AppReducers,
    {
        GameMap:getGameMap(),
        GameState:0,
        Counter:0
    });