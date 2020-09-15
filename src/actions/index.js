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
const showBar = () => {
    return {
        type: 'SHOW_BAR'

    }
};
const eventsRequested = () => {
    return {
        type: 'EVENT_REQUESTED'
    }
};
const eventsError = (error) => {
    return {
        type: 'EVENTS_ERROR',
        payload: error
    }
};

export {
    eventLoaded,
    asideLoaded,
    showBar,
    eventsRequested,
    eventsError
};