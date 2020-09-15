const initialState = {
    eventsState: [],
    asideState: [],
    showBar: false,
    loading: false,
    error:null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_REQUESTED':
            return {
                eventsState: [],
                asideState: [],
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
                showBar: state.showBar,
                error: null
            };
        case 'EVENTS_ERROR':
            return {

                eventsState: [],
                asideState: [],
                loading: true,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;