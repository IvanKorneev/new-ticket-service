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
            const newCartItem = action.payload
            const newPrice = newCartItem.price
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newCartItem,

                ],
                totalPrice: state.totalPrice + newPrice,
                totalTickets: state.totalTickets + 1
            }
        case 'REMOVED_TO_CART':
            const removedCartItem = action.payload.removedId
            // const removedPrice = removedCartItem.price
            const index = state.cartItems.findIndex((el) => el === removedCartItem)
            console.log(action.payload.removedId+"Reduser")
            console.log(removedCartItem+'removedCartItem')
            console.log(state.cartItems)

            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, index),
                    ...state.cartItems.slice(index + 1)
                ],
                // totalPrice: state.totalPrice - removedPrice,
                // totalTickets: state.totalTickets - 1

            }
        default:
            return state;
    }
};