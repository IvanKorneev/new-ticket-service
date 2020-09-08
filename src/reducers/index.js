const initialState ={
    events: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_LOADED':
            return {
                events: action.payload
            };
        default:
            return state;
    }
};

export default reducer;