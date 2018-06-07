import * as ActionTypes from './ActionType'
import {reduxStore} from './ReduxStore'

export function counterModify(newCounter = 0) {
    return {type:ActionTypes.CounterModify,newCounter};
}

export function changeGameState(state = 0) {//Restart the game
    let arr = [];
    if(state === 0){
        for(let i = 0;i < reduxStore.getState().GameMap.length;i++){
            arr[i] = 0;
        }
        return {type:ActionTypes.GameStateChanged,Config:{GameState:0,Counter:0,GameMap:arr}}
    }
    else
    {
        return {type:ActionTypes.GameStateChanged,Config:{GameState:1}}
    }
}

export function usrClickScreen(blockNumber) {
    let arr = [];
    for(let i = 0;i < reduxStore.getState().GameMap.length;i++){
        arr[i] = reduxStore.getState().GameMap[i];
    }
    if(reduxStore.getState().GameState !== 1){
        flipTheArray(arr,blockNumber);
        if(checkWinner(arr)){
            return changeGameState(1);
        }
    }
    return {type:ActionTypes.ScreenClicked,newGameMap:arr};
}
function checkWinner(array) {
    for(let i = 0;i < array.length;i++){
        if(array[i]===0){
            return false;
        }
    }
    return true;
}
function flipTheArray(array,blockNumber) {
    array[blockNumber] = 1 - array[blockNumber];
    
    if((blockNumber) % Math.sqrt(array.length) !== 0){
        array[blockNumber - 1] = 1 - array[blockNumber - 1];
    }
    if(blockNumber + 1 < (Math.floor(blockNumber/Math.sqrt(array.length) + 1) * Math.sqrt(array.length))){
        array[blockNumber + 1] = 1 - array[blockNumber + 1];
    }
    if(blockNumber - Math.sqrt(array.length) >= 0){
        array[blockNumber - Math.sqrt(array.length)] = 1 - array[blockNumber - Math.sqrt(array.length)];
    }
    if(blockNumber + Math.sqrt(array.length) < array.length){
        array[blockNumber + Math.sqrt(array.length)] = 1 - array[blockNumber + Math.sqrt(array.length)];
    }
}