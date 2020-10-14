const initialState = {
    eventsState: [],
    asideState: [],
    showBar: false,
    loading: false,
    error: null,
    pageSize: 4,
    totalEventsCount: 12,
    currentPage: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'ASIDE_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'EVENT_LOADED':
            return {
                ...state,
                eventsState: action.payload,
                loading: false,
                error: null
            };
        case 'ASIDE_LOADED':
            return {
                ...state,
                asideState: action.payload,
                loading: false,
                error: null
            };
        case 'SHOW_BAR':
            return {
                ...state,
                showBar: action.payload
            };
        case 'EVENTS_ERROR':
            return {
                ...state,
                eventsState: [],
                asideState: [],
                loading: false,
                error: action.payload
            };
        case 'SET_EVENTS_PAGE':{
            return {
                ...state ,
                currentPage: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducer;