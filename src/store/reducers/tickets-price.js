const initialState = {
    priceRanges: [],
    lockedSeats: [],
    loading: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'PRICE_RANGES':
            return {
                ...state,
                priceRanges: action.payload
            };
        case 'PRICE_INDICATOR':
            return {
                ...state,
                loading: true,
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