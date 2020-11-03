const initialState = {
    event: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_PAGE_LOADED':
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};
