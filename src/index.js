import React from 'react';
import ReactDOM from 'react-dom';
import  { ThemeProvider } from "styled-components";

import App from './App';
import { Global } from "./config/theme/index";
import * as serviceWorker from './serviceWorker';
import Hero from './components/Hero';

ReactDOM.render(
    <ThemeProvider theme={ Global.Color }>
        <Hero background="/berlin-bg-1.png" />
        <App />
        <Global.Style />
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
