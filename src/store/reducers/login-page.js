const initialState = {
    email: "",
    password: "",
    token: "",
    loginResult: ""
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

