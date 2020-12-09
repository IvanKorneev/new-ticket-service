const initialState = {
    asideState: [],
    error: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ASIDE_REQUESTED':
            return {
                ...state,
                error: null
            };
        case 'ASIDE_LOADED':
            return {
                ...state,
                asideState: action.payload,
                error: null
            };
        default:
            return state;
    }
};


