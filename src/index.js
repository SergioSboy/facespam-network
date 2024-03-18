import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([{
    path: '/*',
    element: <App/>
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);




