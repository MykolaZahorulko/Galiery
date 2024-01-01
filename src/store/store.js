import {applyMiddleware, combineReducers, createStore} from 'redux'
import burgerReducer from '../reducers/burgerReducer.js';
import headerReducer from "../reducers/headerReducer.js";
import windowWidthReducer from "../reducers/windowWidthReducer.js";
import cartReducer from '../reducers/cartReduser.js';
import languageReducer from '../reducers/languagePopapReducer.js';
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    burger: burgerReducer,
    header: headerReducer,
    windowWidth: windowWidthReducer,
    cart: cartReducer,
    language: languageReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
