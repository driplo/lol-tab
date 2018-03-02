import { combineReducers } from 'redux'
import optionsReducer from './options'
import configReducer from './config'

const tabStore = combineReducers({
  optionsReducer,
  configReducer,
})

export default tabStore
