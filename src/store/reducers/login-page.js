const initialState = {
    loading: false,
    loginData: {},
    // registrationData: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                loading: true,
                loginData: action.payload
            };

        case 'LOGIN_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'RESET_USER_DATA':
            return {
                ...state,
                loginData: action.payload
            };
        default:
            return state;
    }
};


