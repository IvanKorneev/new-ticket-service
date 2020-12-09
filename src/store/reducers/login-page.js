const initialState = {
    loading: false,
    loginData: {},

};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                loading: false,
                loginData: action.payload
            };
        case 'LOADING_INDICATOR_LOGIN':
            return {
                ...state,
                loading: true,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'RESET_LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'RESET_USER_DATA':
            return {
                ...state,
                loading: false,
                loginData: action.payload
            };
        default:
            return state;
    }
};


