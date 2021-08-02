import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/index'

var store = createStore(reducer, applyMiddleware(thunk))

export default store; 