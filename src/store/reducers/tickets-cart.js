const initialState = {
    cartItems: [],
    totalPrice: null,
    totalTickets: null,
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
            const price = cartItem.price
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    cartItem
                ],
                totalPrice: state.totalPrice + price,
                totalTickets: state.totalTickets + 1
            }
        case 'REMOVED_TO_CART':
            return {

            }
        default:
            return state;
    }
};