const eventLoaded = (newEvent) => {
    return {
        type: 'EVENT_LOADED',
        payload: newEvent
    }
};
const asideLoaded = (newAside) => {
    return {
        type: 'ASIDE_LOADED',
        payload: newAside
    }
};

const showBar = (newShowbar) => {
    return {
        type: 'SHOW_BAR',
        payload: newShowbar
    }
};

const eventsRequested = () => {
    return {
        type: 'EVENT_REQUESTED'
    }
};

const asideRequested = () => {
    return {
        type: 'ASIDE_REQUESTED'
    }
};

const eventsError = (error) => {
    return {
        type: 'EVENTS_ERROR',
        payload: error
    }
};

const setEventsPages = (currentPage) => {
    return {
        type: 'SET_EVENTS_PAGE',
        currentPage: currentPage

    }
};

// const fetchEvents = (TicketService, dispatch) => () => {
//     dispatch(eventsRequested());
//     TicketService.getEvents('',1,12)
//         .then((data) => dispatch(eventLoaded(data)))
//         .catch((error) => dispatch(eventsError(error)))
// };
const fetchAside = (TicketService, dispatch) => () => {
    dispatch(asideRequested());
    TicketService.getUpcomingEvents()
        .then((data) => dispatch(asideLoaded(data)))
        .catch((error) => dispatch(eventsError(error)))
};


export {
    eventLoaded,
    fetchAside,
    eventsError,
    showBar,
    eventsRequested,
    setEventsPages
};

























