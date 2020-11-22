import aside from './aside';
import eventPage from './event-page';
import events from './events';
import loginPage from './login-page';
import showBar from './showbar';
import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    aside,
    eventPage,
    events,
    loginPage,
    showBar,
    form:formReducer
});
export default rootReducer;

