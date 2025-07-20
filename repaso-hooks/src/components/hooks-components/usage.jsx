import { useState, useEffect } from "react"

function Usage(props) {
    const state = props.state;
    const [usage, setUsage] = useState('');


    useEffect(() => {
        //TO avoid the display of a different message
        if (!state) {
            console.log("State is empty or invalid, skipping fetch.");
            return;
        }

        //Log the state value right before the fetch
        console.log(`Attempting to fetch for state: "${state}"`);


        fetch(`/usage/${state}.txt`) //Los archivos deben estar en 'public' para el fetch pueda acceder a ellos
            .then(response => {
                console.log('Fetch response status (Usage):', response.status);
                if (!response.ok) {
                    throw new Error(`Network response was not ok (Usage). Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                setUsage(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation (Usage):', error);
            });

    }, [state]);

    return (

        <section className="usage">
            <h2>Usage</h2>
            <p>{usage.length === 0 ? 'Loading...' : usage}</p>
        </section>

    );


}

export default Usage