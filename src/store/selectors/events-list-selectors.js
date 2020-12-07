export const getEvents = (state) => {
    return state.events.eventsState;
};
export const getLoading = (state) => {
    return state.events.loading;
};
export const getError = (state) => {
    return state.events.error;
};
export const getPageSize = (state) => {
    return state.events.pageSize;
};
export const getTotalEventsCount = (state) => {
    return state.events.totalEventsCount;
};
export const getCurrentPage = (state) => {
    return state.events.currentPage;
};



