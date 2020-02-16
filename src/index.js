import React from 'react';
import ReactDOM from 'react-dom';
import  { ThemeProvider } from "styled-components";

import App from './App';
import { Global } from "./config/theme/index";
import * as serviceWorker from './serviceWorker';
import Hero from './components/Hero';

/* App Funktionalitäten
	1. Fetch Api und filter ergebnisse
	2. Display ordnung mit billigsten reise zuerst
	3. Lass den user die reise individualisieren

	*BONUS* 
	Wenn ich genug zeit habe dann würde ich es versuchen ein *Lucky* Functionalität zu bauen, 
	der user kann ich eine reise randomasieren - nur für spontane leute :P

	* Wünsche - Wenn ich mehr zeit hätte ich... *
	-  React Router genützt für routing.
	-  Mehr Optionen für Lucky Modus.
	-  Besser UI :P
	
	* Möglichkeiten *

	- React Suspense Probieren
*/
const {Dimensions, Color} = Global;
ReactDOM.render(
    <ThemeProvider theme={{ ...Color, ...Dimensions }}>
        <Hero background="/berlin-bg-1.png" />
        <App />
        <Global.Style />
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
