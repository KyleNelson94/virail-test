const typeAllocation = (items = []) => {

    if (items.length > 0) { // check array length

        items.map((item, i) => {

            const {
                id,
                transport
            } = item;

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


const response = await fetch(API_DATA, { mode: "cors", method: "GET" });
const payload = await response.json(); // json return
if (response.ok) setIsLoading(false); // once response is done set loading to false
if (!response.ok) console.error("Error", response.status);
setResults(payload.result);

{
    /* {data.map((item, key) => {
    					const {transport, expired, price, provider, segments} = item;

    					return (
    						<Card
    							key={key}
    							type={transport}
    							expired={expired}
    							price={price}
    							provider={provider}
    							segments={segments}
    						/>
    					);
    				})} */
}