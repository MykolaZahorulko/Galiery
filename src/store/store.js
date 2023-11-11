import {combineReducers, createStore} from 'redux'
import burgerReducer from '../reducers/burgerReducer.js';
import headerReducer from "../reducers/headerReducer.js";

const rootReducer = combineReducers({
    burger: burgerReducer,
    header: headerReducer,
})

const store = createStore(rootReducer);

export default store
