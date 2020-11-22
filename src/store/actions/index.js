import {getEventInfo, getEvents, getUpcomingEvents, login} from "../../api/api";

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
const eventPageLoaded = (newPage) => {
    return {
        type: 'EVENT_PAGE_LOADED',
        payload: newPage
    }
};
const setUserData = (newEmail, newPassword) => {
    return {
        type: 'SET_USER_DATA',
        payload: {newEmail, newPassword}
    }
};

export const fetchEvents = (currentPage, pageSize) => {
    return (dispatch) => {
        getEvents('', currentPage, pageSize)
            .then((response) => dispatch(eventLoaded(response.data.events)))
            .catch((error) => dispatch(eventsError(error)))
    };
};
export const fetchAside = () => {
    return (dispatch) => {
        getUpcomingEvents().then((response) => dispatch(asideLoaded(response.data.events)))
            .catch((error) => dispatch(eventsError(error)))
    }
};

export const fetchEventInfo = (eventId) => {
    return (dispatch) => {
        getEventInfo(eventId).then((response) => dispatch(eventPageLoaded(response.data)))
    }
};

export const fetchLogin = (email, password) => {
    return (dispatch) => {
        login(email, password).then((response) => {
            console.log(response);
            dispatch(setUserData(response))
        })
    }
};


export {
    showBar,
    eventsRequested,
    setEventsPages,
    setUserData,
};
