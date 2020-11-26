const initialState = {
    loading:false,
    loginData:{}
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
                error:action.payload
            };
        default:
            return state;
    }
};

