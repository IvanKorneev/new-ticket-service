type initialStateType = {
    asideState: {
        artist: string |null,
        availabilityStatus: number|null,
        eventId: number|null,
        eventName: string|null,
        eventStart: number|null,
        images: Array<string>
    }[],
    error: null
}

const initialState: initialStateType = {
    asideState: [],
    error: null
};
export default (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'ASIDE_REQUESTED':
            return {
                ...state,
                error: null,

            };
        case 'ASIDE_LOADED':
            return {
                ...state,
                asideState: action.payload,
                error: null
            };
        default:
            return state;
    }
};


