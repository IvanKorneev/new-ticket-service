const initialState = {
    totalPrice : 200,
    totalTickets:3,
    cart:{}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOCKED_SEATS':
            return {
                ...state,
                lockedSeats: action.payload
            };
        default:
            return state;
    }
};