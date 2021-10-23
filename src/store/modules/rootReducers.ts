import { combineReducers } from 'redux'

import { loginReducer } from './login/reducers'
import { socketReducer } from './socket/reducers'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  socketReducer: socketReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
