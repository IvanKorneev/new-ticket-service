import axios from 'axios';

const _apiBase = 'https://ticket-service.herokuapp.com';

export const getUpcomingEvents = async () => {
    let response = await axios.get(`${_apiBase}/events/upcoming?size=3&page=2`);
    if (!response) {
        throw new Error(`Getting events isn\`t ok.`);
    }
    return response
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
            console.log(res);
            return res;
        })
        .catch(function (error) {
            console.log(error);
        });
    return getEventsResponse;
};

export const getEventInfo = async (eventId) => {
    let response = await axios.get(`${_apiBase}/events/${eventId}`);
    if (!response) {
        throw new Error(`Getting events info\`t ok.`);
    }

    return response
};