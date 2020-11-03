const initialState = {
    eventsState: [],
    loading: false,
    error: null,
    pageSize: 4,
    totalEventsCount: 12,
    currentPage: 1
};
const events = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_REQUESTED':
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

        case 'EVENTS_ERROR':
            return {
                ...state,
                eventsState: [],
                // asideState: [],
                loading: false,
                error: action.payload
            };
        case 'SET_EVENTS_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state;
    }
};
export default events;
