const eventLoaded = (newEvent) => {
    return {
        type: 'EVENT_LOADED',
        payload: newEvent
    }
};

export {
    eventLoaded
};