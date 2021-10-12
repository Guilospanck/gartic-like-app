import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from "./modules/rootReducers"
import { rootSaga } from "./modules/rootSagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store