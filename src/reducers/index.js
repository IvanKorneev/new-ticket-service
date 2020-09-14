const initialState = {
    eventsState: [],
    asideState: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_LOADED':
            return {
                ...state,
                eventsState: action.payload
            };
        case 'ASIDE_LOADED':
            return {
                ...state,
                asideState: action.payload
            };
        default:
            return state;
    }
};

export default reducer;