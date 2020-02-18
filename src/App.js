import React, {useState, useEffect } from 'react'; // Explore Suspense if I get time
import Main from "./components/layout/index";
import { API_DATA } from './config/Api'; // issue - api has cors, need to get browser extensions to get past this.
import axios from "axios";
import ErrorHandler from './components/ErrorHandler';
import Loader from './components/Loader';
import Location from './components/Location';
import Transport from './components/Transport';
import ResultList from './components/ResultList';
function App() {
	const[API] = useState(API_DATA);
	const[isLoading, setIsLoading] = useState(true);
	const[isError, setIsError] = useState(false);
	const[data, setData] = useState([]);
	const[from, setFrom] = useState("");
	const[to, setTo] = useState("");
	const[type, setType] = useState("all");

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			
			try {
				const response = await axios(API);
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
	}, [API]);
	return (
		<React.Fragment>
			{isError && <ErrorHandler />}
			{isLoading && <Loader /> }
			<Main>
				<Location to={to} from={from} />
				{!isLoading &&
					<React.Fragment>
						<Transport types={data.transportStatus} />
						<ResultList results={data.result} type={type} />
					</React.Fragment>
				}
			</Main>
		</React.Fragment>
	);
}

export default App;