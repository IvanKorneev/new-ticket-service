import {
    getEventInfo,
    getEvents,
    getHallStructureByEventId,
    getUpcomingEvents,
    login
} from "../../api/api";

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
const loadingIndicator = () => {
    return {
        type: 'LOADING_INDICATOR'
    }
};
const loadingIndicatorLogin = () => {
    return {
        type: 'LOADING_INDICATOR_LOGIN'
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
        payload: currentPage
    }
};
const eventPageLoaded = (newPage) => {
    return {
        type: 'EVENT_PAGE_LOADED',
        payload: newPage
    }
};
const setUserData = (email, token, ...params) => {
    return {
        type: 'SET_USER_DATA',
        payload: {email, token, ...params}
    }
};
const loginError = (error) => {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    }
};
const resetLoginError = () => {
    return {
        type: 'RESET_LOGIN_ERROR',
        payload: ''
    }
};

const resetUserData = () => {
    return {
        type: 'RESET_USER_DATA',
        payload: {}
    }
};

const priceLoaded = (newPrice) => {
    return {
        type: 'PRICE_RANGES',
        payload: newPrice
    }
}
const priceIndicator = () => {
    return {
        type: 'PRICE_INDICATOR'
    }
}

const addToCart = (seatNumber, row, price, id) => {
    return {
        type: 'ADD_TO_CART',
        payload: {seatNumber, row, price, id}
    }
}
const removedFromCart = (removedId, price) => {
    return {
        type: 'REMOVED_FROM_CART',
        payload: {removedId, price}
    }
}


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
            .catch((error) => dispatch(eventsError(error)))
    }
};

export const fetchLogin = (email, password, ...params) => {
    return (dispatch) => {
        login(email, password).then((response) => {
            dispatch(setUserData(email, response.data.token, ...params));
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token)
        })
            .catch((error) => dispatch(loginError(error.message)));
    }
};

export const fetchGetHallStructureByEventId = (eventId, isShort) => {
    return (dispatch) => {
        getHallStructureByEventId(eventId, isShort).then((response) => dispatch(priceLoaded(response.data.priceRanges)))
            .catch((error) => dispatch(eventsError(error)))
    }
}

export {
    showBar,
    loadingIndicator,
    setEventsPages,
    setUserData,
    resetUserData,
    resetLoginError,
    loadingIndicatorLogin,
    priceIndicator,
    addToCart,
    removedFromCart
};
