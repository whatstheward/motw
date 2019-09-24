import { createStore, combineReducers } from 'redux'
import playbookReducer from './reducers/playbookReducer';
import hunterMoveReducer from './reducers/hunterMoveReducer';

const rootReducer = (state={}, action) => {
    switch(action.type){
        case "HOME":
            return state
        default: 
            return state
    }
}

const appReducer = combineReducers({
    playbooks: playbookReducer,
    hunterMoves: hunterMoveReducer,
    root: rootReducer
}) 

export const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)