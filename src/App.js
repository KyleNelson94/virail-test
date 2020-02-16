import React, {useState, useEffect } from 'react'; //Suspense if ii get time
import Main from "./components/layout/index";
import { API_DATA } from './config/Api'; // issue - api has cors, need to get browser extensions to get past this.
// import Button from './components/Button';
import axios from "axios";
import ErrorHandler from './components/ErrorHandler';
import Loader from './components/Loader';
import Location from './components/Location';
import Transport from './components/Transport';
function App() {
	const[API] = useState(API_DATA);
	const[isLoading, setIsLoading] = useState(true);
	const[isError, setIsError] = useState(false);
	const[data, setData] = useState([]);
	const[from, setFrom] = useState("");
	const[to, setTo] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			
			try {
				const response = await axios(API);
				setData(response.data);
				setTo("Milan"); // get this from api
				setFrom("Rome"); // set this from api
				setIsLoading(false);
			} catch(error) {
				setIsLoading(false);
				setIsError(true) 
			};
		}
		
		fetchData();
	}, [API]);

	return (
		<React.Fragment>
			{isError && <ErrorHandler />}
			{isLoading && <Loader /> }
			<Main>
				<Location to={to} from={from} />
				{!isLoading && <Transport types={data.transportStatus} />}
			</Main>
		</React.Fragment>
	);
}

export default App;