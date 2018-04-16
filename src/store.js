import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import fridgeReducer from './components/fridge/fridge.reducer'

import shopListReducer from './components/shopList/shopList.reducer'

const reducers = combineReducers({
  routerReducer,
  fridgeReducer,
  shopListReducer
})

const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    promiseMiddleware()
  )))

export default store
