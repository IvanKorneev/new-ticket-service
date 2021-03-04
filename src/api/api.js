import axios from 'axios';

const _apiBase = 'https://ticket-service.herokuapp.com';

export const getUpcomingEvents = async () => {
    let response = await axios.get(`${_apiBase}/events/upcoming?size=3&page=2`)
        .catch(error => {
            throw new Error(`${error}Getting events isn\`t ok.`)
        });
    return response
};

export const getEventInfo = async (eventId) => {
    let response = await axios.get(`${_apiBase}/events/${eventId}`)
        .catch(error => {
            throw new Error(`${error}Getting events isn\`t ok.`)
        });

    return response
};

export const login = async (email, password) => {
    let url = `${_apiBase}/login`;
    const body = JSON.stringify({
        "email": email,
        "password": password
    });
    const headers = {
        "Content-type": "application/json"
    };
    const response = await axios.post(url, body, {headers})
        .then((response) => {
            return response
        }).catch(error => {
            throw  new Error(`${error.response.data.message}`);
        });

    return response;
};
export const getEvents = async (authorization = '', currentPage = 1, pageSize = 4) => {
    let url = `${_apiBase}/events?page=${currentPage}&page-size=${pageSize}`;
    const body = JSON.stringify({
        "dateFrom": 1541384000000,
        "dateTo": 1579073600000,
        "type": "1"
    });
    let headers = {
        "Content-type": "application/json",
        "Authorization": authorization
    };
    const getEventsResponse = await axios.post(url, body, {headers})
        .then((res) => {
            return res;
        })
        .catch(error => {

        });
    return getEventsResponse;
};


export const getHallStructureByEventId = async (eventId, isShort = false, authorization = '') => {
    let response = await axios.get(`${_apiBase}/hall/${eventId}/${isShort}`)
        .catch(error => {
            throw new Error(`${error}Getting events isn\`t ok.`)
        });
    return response
}
