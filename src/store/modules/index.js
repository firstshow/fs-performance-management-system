import { combineReducers } from 'redux'
import User from './user/reducer'
import Team from './team/reducer'
import Performance from './performance/reducer'

export default combineReducers({ User, Team, Performance })