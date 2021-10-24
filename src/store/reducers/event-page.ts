type initialStateType1 = {
    event: {
        artist: string|null,
        description: string|null,
        eventDurationHours: number|null,
        eventId: number|null,
        eventName: string|null,
        eventStart: number|null,
        eventType: number|null,
        hall: number|null,
        images: Array<string>,
        maxPrice: number|null,
        minPrice: number|null,
        ticketsAvailable: number|null
    } | {}
}
const initialState: initialStateType1 = {
    event: {}
};
export default (state = initialState, action: any): initialStateType1 => {
    switch (action.type) {
        case 'EVENT_PAGE_LOADED':
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};
