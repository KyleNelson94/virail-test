import React, {useState, useEffect, } from 'react'; //Suspense
import styled from "styled-components";
import Main from "./components/layout/index";
import { API_DATA } from './config/Api'; // issue - api has cors, need to get browser extensions to get past this.
import Button from './components/Button';
import Card from './components/Card';
import axios from "axios";

const List = styled.div`

	position: relative;
	width: 100%;
`;
function App() {
	const[API, setAPI] = useState(API_DATA);
	const[isLoading, setIsLoading] = useState(true);
	const[isError, setIsError] = useState(false);
	const[data, setData] = useState({ trips: [] });

	useEffect(() => {
		
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			
			try {
				const response = await axios(API);
				setData(response.data);
			} catch(error) {
				setIsError(true);
			}	
		}
		
		fetchData();
	}, [API]);

	return (
		<Main>
			<h2 style={{textAlign: "center"}}>Method of Transport</h2>

		</Main>
	);
}

export default App;
