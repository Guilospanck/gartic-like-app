import { combineReducers } from 'redux'

import { loginReducer } from './login/reducers'
import { socketReducer } from './socket/reducers'
import { messageReducer } from './messages/reducers'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  socketReducer: socketReducer,
  messageReducer: messageReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
