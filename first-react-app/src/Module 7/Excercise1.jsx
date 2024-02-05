import { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]); // used to track the currently selected currency
    const [bitcoinPrice, setBitcoinPrice] = useState(null); // // used to store the Bitcoin price for the selected currency. 
    const { currentUser, handleUpdateUser } = useUserContext();

    useEffect(() => {
        const apiUrl = 'https://blockchain.info/ticker'; //Setting the endpoint to new API provided. 

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                // Check if the currency is present in the response
                const currencyData = data[currency];

                if (currencyData !== undefined) {
                    const price = currencyData.last;
                    setBitcoinPrice(price);
                } else {
                    console.error(`No data for currency ${currency}`);
                }
            } catch (error) {
                console.error('Error fetching Bitcoin price:', error);
            }
        };

        fetchData();

        return () => { // To improve - use the ignore logic for the cleanup function.
            // Cleanup logic: abort ongoing fetch request if it exists
            const controller = new AbortController(); // An abortcontroller made to abort any ongoing fetch requests. This helps to prevent memory leaks and issues with asynchronous operations when the component unmounts or when currency changes.
            controller.abort();
        };

    }, [currency]);

    const options = currencies.map(curr => ( // provides user with dropdown options for the different currencies. Maps over currencies array to create option elements for dropdown.
        <option value={curr} key={curr}> 
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <h4>{currentUser.email}</h4> 
            <h4>{currentUser.userName}</h4> 
            <label>
                Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
    
            </label>

            {bitcoinPrice !== null ? (
                <p>
                    Current Bitcoin Price in {currency}: {bitcoinPrice}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BitcoinRates;
