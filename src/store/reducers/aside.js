const initialState = {
    asideState: [],
    loading: false,
    error: null
};
const aside = (state = initialState, action) => {
    switch (action.type) {
        case 'ASIDE_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'ASIDE_LOADED':
            return {
                ...state,
                asideState: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
export default aside;

