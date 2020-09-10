import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app/app";
import {Provider} from 'react-redux';
import ErrorBoundry from "./component/error-boundry";
import TicketService from "./sevices/ticketService";
import TicketsServiceContext from "./ticket-service-context";
import store from "./store";

const ticketService = new TicketService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <TicketsServiceContext.Provider value={ticketService}>
                <App/>
            </TicketsServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);

