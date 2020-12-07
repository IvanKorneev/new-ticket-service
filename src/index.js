import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app/app";
import {Provider} from 'react-redux';
import ErrorBoundry from "./component/error-boundry";
import store from "./store/store";
import {BrowserRouter as Router} from 'react-router-dom';




ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
                <Router>
                    <App/>
                </Router>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);

