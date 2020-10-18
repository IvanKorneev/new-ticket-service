export default class TicketService {

    _apiBase = 'https://ticket-service.herokuapp.com';

    getEvents = async (authorization = '',currentPage,pageSize) => {
        let response = await fetch(`${this._apiBase}/events?page=${currentPage}&page-size=${pageSize}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": authorization
            },
            body: JSON.stringify({
                "dateFrom": 1541384000000,
                "dateTo": 1579073600000,
                "type": "1"
            })
        });
        if (!response.ok) {
            let json = await response.json();
            // console.log(json);
            // console.log(response);
            throw new Error
            (`${json.message}. Try again!`);
        }
        let json = await response.json();
        return json.events;
    };

    getUpcomingEvents = async (authorization = '') => {
        let response = await fetch(`${this._apiBase}/events/upcoming?size=3&page=2`);
        if (!response.ok) {
            throw new Error(`Getting events isn\`t ok.`);
        }
        // ${json.message}.
        // ${json.body.eventType[0]}
        let json = await response.json();
        return json.events;
    };

    getEventInfo = async (eventId) => {
        let response = await fetch(`${this._apiBase}/events/${eventId}`);
        if (!response.ok) {
            // console.log(json.message);
            // console.log(response);
            throw new Error(`Getting events isn\`t ok.`);
        }
        // ${json.message}.
        // ${json.body.eventType[0]}
        let json = await response.json();
        return json;
    };

    login = async (email, password) => {
        let response = await fetch(`${this._apiBase}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        if (!response.ok) {
            let json = await response.json();
            let errorMsg = '';
            console.log(json);
            // console.log(response);
            for(let prop in json.body){
                errorMsg += `${json.body[prop][0]}`
            }
            throw new Error(`${json.message}. ${errorMsg}`);
        }
        let json = await response.json();
        // console.log(json.token);
        return json.token;
    };

    registration = async (email, password, firstName, lastName, gender, phoneNumber) => {
        let response = await fetch(`${this._apiBase}/registration`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "firstName": firstName,
                "gender": gender,
                "lastName": lastName,
                "password": password,
                "phoneNumber": phoneNumber
            })
        });
        if (!response.ok) {
            let json = await response.json();
            let errorMsg = '';
            // console.log(json);
            for (let prop in json.body) {
                // console.log(json.body[prop][0]);
                errorMsg += `${json.body[prop][0]}.`;
            }
            // console.log(response);
            throw new Error(`${json.message}. ${errorMsg}`);
        }
    };
    getHallStructureByEventId = async (eventId, isShort = false, authorization = '') => {
        let response = await fetch(`${this._apiBase}/hall/${eventId}/${isShort}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if(!response.ok){
            let json = await response.json();
            throw new Error(`${json.message}`)
        }
        // console.log(response.json());
        // return await response.json();
        let json = await response.json();
        return json;
    }
}
