const initialState = {
    showBar: false
};
const showBar = (state = initialState, action) => {
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
export default showBar;
