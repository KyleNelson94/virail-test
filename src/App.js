import React, {useState, useEffect, Suspense} from 'react';
import Main from "./components/layout/index";
import Card from "./components/Card";
import { API_DATA } from './config/Api';
import Button from './components/Button';
import { render } from '@testing-library/react';
import List from './components/List';

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

function App() {

	const[isLoading, setIsLoading] = useState(true);
	// const[trainTrips, setTrainTrips] = useState([]);
	// const[busTrips, setBusTrips] = useState([]);
	// const[planeTrips, setPlaneTrips] = useState([]);
	const[results, setResults] = useState([]);

	useEffect(() => {
		// issue - api has cors, need to get browser extensions to get past this.
		async function fetchData() {
			// Get Data
			const response = await fetch(API_DATA, { mode: "cors", method: "GET"});
			const payload = await response.json(); // json return
			if(response.ok) setIsLoading(false); // once response is done set loading to false
			if(!response.ok) console.error("Error", response.status);
			setResults(payload.result);
			console.log("trips- ---------> ", payload.result);
			// let trip = payload.result.map((item => item)); // ergebnisse

			// renderData(trips);
		}
		
		fetchData();

	}, [isLoading]);

	const typeAllocation = (items = []) => {

		

		if (items.length > 0) { // check array length

			items.map((item, i) => {

				const {id, transport} = item;

				// switch(transport) {
				// 	case "bus": console.log("Bus Val ------> ", item);
				// 	break;
				// 	case "plane": console.log("Plane Val ------> ", item);
				// 	break;
				// 	case "train": console.log("train Val ------> ", item);
				// 	break;
				// 	case "car": console.log("Car Val -----------> ", item);
				// 	break;
				// 	default: console.log("item has no case ------> ", item);
				// };
			});
		}
	};

	const _handleTypePress = (type) => {

		console.log("current state of results -----> ", results);
		// console.log("Type Press ----> ", type);
	};

	return (
		<Main>
			<h2 style={{textAlign: "center"}}>Method of Transport</h2>
			<Button onClick={() => _handleTypePress("train")}>Train</Button>
			<Button onClick={() => _handleTypePress("plane")}>Plane</Button>
			<Button onClick={() => _handleTypePress("car")}>Car</Button>
			<Button onClick={() => _handleTypePress("bus")}>Bus</Button>
			<Button onClick={() => _handleTypePress("any")}>Any</Button>
			
			<List items={results} loading={isLoading} />
				{/* <Suspense fallback={<p>Loading...</p>}></Suspense> */}
		</Main>
	);
}

export default App;
