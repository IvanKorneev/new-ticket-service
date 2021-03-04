const initialState = {
    cartItems: [],
    totalPrice: 200,
    totalTickets: 3,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOCKED_SEATS':
            return {
                ...state,
                lockedSeats: action.payload
            };
        case 'ADD_TO_CART':

               const cartItem = action.payload

            return {
                ...state,
                cartItems:[
                    ...state.cartItems,
                    cartItem
                ]
            }
        default:
            return state;
    }
};