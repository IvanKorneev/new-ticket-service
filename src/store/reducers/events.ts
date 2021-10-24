type initialStateType1 = {
    eventsState: {
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
    }[],
    loading:boolean,
    error:boolean|null,
    pageSize: number,
    totalEventsCount: number,
    currentPage:number

}

const initialState:initialStateType1 = {
    eventsState: [],
    loading: false,
    error: null,
    pageSize: 4,
    totalEventsCount: 12,
    currentPage: 2
};
export default  (state = initialState, action:any):initialStateType1 => {
    switch (action.type) {
        case 'LOADING_INDICATOR':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'EVENT_LOADED':
            return {
                ...state,
                eventsState: action.payload,
                loading: false,
                error: null
            };

        case 'EVENTS_ERROR':
            return {
                ...state,
                eventsState: [],
                loading: false,
                error: action.payload
            };
        case 'SET_EVENTS_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state;
    }
};

