import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/style/global.scss";
import "../src/assets/style/Header.scss";
import "../src/assets/style/Footer.scss";
import Routes from "./routes";
import store from "./reduxToolkit/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </React.StrictMode>
)
