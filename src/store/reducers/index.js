// const initialState = {
    // eventsState: [],
    // asideState: [],
    // showBar: false,
    // loading: false,
    // error: null,
    // pageSize: 4,
    // totalEventsCount: 12,
    // currentPage: 1,
    // event: {},
    // email: "",
    // password: "",
    // token: "",
    // loginResult: ""
// };
import aside from './aside';
import eventPage from './event-page';
import events from './events';
import loginPage from './login-page';
import showBar from './showbar';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    aside,
    eventPage,
    events,
    loginPage,
    showBar
});
export default rootReducer;
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'EVENT_REQUESTED':
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case 'ASIDE_REQUESTED':
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case 'EVENT_LOADED':
//             return {
//             ...state,
//             eventsState: action.payload,
//             loading: false,
//             error: null
//         };
//         case 'ASIDE_LOADED':
//             return {
//                 ...state,
//                 asideState: action.payload,
//                 loading: false,
//                 error: null
//             };
//         case 'SHOW_BAR':
//             return {
//                 ...state,
//                 showBar: action.payload
//             };
//         case 'EVENTS_ERROR':
//             return {
//                 ...state,
//                 eventsState: [],
//                 asideState: [],
//                 loading: false,
//                 error: action.payload
//             };
//         case 'SET_EVENTS_PAGE':
//             return {
//                 ...state ,
//                 currentPage: action.payload
//             };
//
//         case 'EVENT_PAGE_LOADED':
//             return {
//                 ...state,
//                 event: action.payload
//             };
//         case 'SET_USER_DATA':
//             return {
//                 ...state,
//                 ...action.data
//             };
//
//         default:
//             return state;
//     }
// };


