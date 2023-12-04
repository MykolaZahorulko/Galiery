import {combineReducers, createStore} from 'redux'
import burgerReducer from '../reducers/burgerReducer.js';
import headerReducer from "../reducers/headerReducer.js";
import windowWidthReducer from "../reducers/windowWidthReducer.js";

const rootReducer = combineReducers({
    burger: burgerReducer,
    header: headerReducer,
    windowWidth: windowWidthReducer,
})

const store = createStore(rootReducer);

export default store
