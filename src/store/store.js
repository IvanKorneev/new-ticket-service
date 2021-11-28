import {applyMiddleware, createStore,compose} from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk"

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;




const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware,)));

export default store;