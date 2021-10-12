import { combineReducers } from 'redux'

import { loginReducer } from './login/reducers'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
