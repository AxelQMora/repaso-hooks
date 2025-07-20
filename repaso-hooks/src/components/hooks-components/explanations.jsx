import { useState, useEffect } from "react";

function Explanation(props) {
    const state = props.state;
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        //TO avoid the display of a different message
        if (!state) {
            console.log("State is empty or invalid, skipping fetch.");
            return;
        }

        //Log the state value right before the fetch
        console.log(`Attempting to fetch for state: "${state}"`);

        fetch(`/explanations/${state}.txt`) //Los archivos deben estar en 'public' para el fetch pueda acceder a ellos
            .then(response => {
                //Log the response status to see if it was successful (status 200)
                console.log('Fetch response status (Explanations):', response.status);
                if (!response.ok) {
                    throw new Error(`Network response was not ok (Explanations). Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                setExplanation(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation (Explanations):', error);
            });

    }, [state]);

    return (
        <section className="explanation">
            <h2>Explanation</h2>
            <p>{explanation.length === 0 ? 'Loading...' : explanation}</p>
        </section>
    );
}

export default Explanation