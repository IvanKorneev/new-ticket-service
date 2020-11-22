const initialState = {
    email: '',
    password: '',
    token: '',
    loginResult: '',
    loading: '',
    error: '',
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                email: action.payload,
                password:action.payload,
                token:action.payload,
                loginResult:action.payload
            };
        default:
            return state;
    }
};

