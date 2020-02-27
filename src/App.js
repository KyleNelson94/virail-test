import React, {useState, useEffect } from 'react'; // Explore Suspense if I get time
import Main from "./components/layout/index";
import { API_DATA } from './config/Api'; // issue - api has cors, need to get browser extensions to get past this.
import axios from "axios";
import ErrorHandler from './components/ErrorHandler';
import Loader from './components/Loader';
import Location from './components/Location';
// import Transport from './components/Transport';
import ResultList from './components/ResultList';
import { getToday, addDays } from './function';
import Button from './components/Button';

function setDays(days) {
	let now = new Date();
	// let week = 7;
	let addWeek = addDays(now, days);
	let dd = String(addWeek.getDate()).padStart(2, '0'); // get day
	let mm = String(addWeek.getMonth() + 1).padStart(2, '0'); // get month
	var yyyy = addWeek.getFullYear(); // // get year

	addWeek = yyyy + "-" + mm + "-" + dd;

	return addWeek;
}
function App() {
	const[API, setAPI] = useState();
	const[isLoading, setIsLoading] = useState(true);
	const[isError, setIsError] = useState(false);
	const[data, setData] = useState([]);
	const[from, setFrom] = useState("");
	const[to, setTo] = useState("");
	const[date, setDate] = useState(getToday());
	const[type, setType] = useState("all");

	useEffect(() => {
		let api = API_DATA(date);
		setAPI(api);
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			
			try {
				const response = await axios(API_DATA(date));
				setData(response.data);
				setTo("Milan"); // get this from endpoint
				setFrom("Rome"); // set this from endpoint
				setIsLoading(false);
			} catch(error) {
				setIsLoading(false);
				setIsError(true) 
			};
		}
		
		fetchData();
	}, [API, date]);

	return (
		<React.Fragment>
			{isError && <ErrorHandler />}
			{isLoading && <Loader /> }
			<Main>
				<Location to={to} from={from} />
				{!isLoading &&
					<React.Fragment>
						<Button onClick={() => setDate(getToday())}>Day 1</Button>
						<Button onClick={() => setDate(setDays(2))}>Day 2</Button>
						<Button onClick={() => setDate(setDays(3))}>Day 3</Button>
						<Button onClick={() => setDate(setDays(4))}>Day 4</Button>
						<Button onClick={() => setDate(setDays(5))}>Day 5</Button>
						<Button onClick={() => setDate(setDays(6))}>Day 6</Button>
						<Button onClick={() => setDate(setDays(7))}>Day 7</Button>
						<ResultList results={data.result} type={type} />
					</React.Fragment>
				}
			</Main>
		</React.Fragment>
	);
}

export default App;