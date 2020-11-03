const initialState = {
    showBar: false
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_BAR':
            return {
                ...state,
                showBar: action.payload
            };
        default:
            return state;
    }
};

