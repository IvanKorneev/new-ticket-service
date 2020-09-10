const initialState ={
    eventsState: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT_LOADED':
            return {
                eventsState: action.payload
            };
        default:
            return state;
    }
};

export default reducer;