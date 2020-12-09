const initialState = {
    eventsState: [],
    loading: false,
    error: null,
    pageSize: 4,
    totalEventsCount: 12,
    currentPage: 1
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_INDICATOR':
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

