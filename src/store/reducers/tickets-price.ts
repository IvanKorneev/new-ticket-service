type initialStateType = {
    priceRanges:{
        color:string,
        price:number,
        rows:Array<number>
    }[],
    loading:boolean
}
const initialState: initialStateType = {
    priceRanges: [],
    loading: false,
};
export default (state = initialState, action: any): initialStateType => {
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
        default:
            return state;
    }
};