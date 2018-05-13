import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducers } from './redux'
import './index.css'
import App from './App'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
