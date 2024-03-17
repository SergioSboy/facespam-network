import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);




