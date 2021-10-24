type initialStateType = {
    showBar:boolean|null
}
const initialState:initialStateType = {
    showBar: false
};
export default (state = initialState, action: any):initialStateType => {
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

