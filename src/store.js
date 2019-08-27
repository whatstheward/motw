import { createStore, combineReducers } from 'redux'

const appReducer = (state={}, action) => {
    switch(action.type){
        case "HOME":
            return state
        default: 
            return state
    }
}

export const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)