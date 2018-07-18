import { combineReducers } from 'redux'
import Login from './user/reducer'
import Team from './team/reducer'
import Performance from './performance/reducer'

export default combineReducers({ Login, Team, Performance })