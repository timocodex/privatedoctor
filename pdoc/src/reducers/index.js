import {combineReducers} from 'redux'
import profileReducer from './reducer_profile.js'
const rootReducers = combineReducers({
  profile: profileReducer
})

export default rootReducers
