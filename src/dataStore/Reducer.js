import * as ActionTypes from './ActionType';

export const AppReducers = (state,action) => {
    switch (action.type)
    {
        case ActionTypes.ScreenClicked:{
            return Object.assign({},state,{...action.Config});
        }
        case ActionTypes.GameStateChanged:{
            return Object.assign({},state,{...action.Config});
        }
        default:
        {
            return state;
        }
    }
};