const initialState = {
    priceRanges: [],
    lockedSeats: []
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'PRICE_RANGES':
            return {
                ...state,
                priceRanges: action.payload
            };
        case 'LOCKED_SEATS':
            return {
                ...state,
                lockedSeats: action.payload
            };
        default:
            return state;
    }
};