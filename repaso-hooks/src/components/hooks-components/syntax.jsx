import { useState, useEffect } from "react";

function Syntax(props) {
    const state = props.state;
    const [syntax, setSyntax] = useState('');

    useEffect(() => {
        //TO avoid the display of a different message
        if (!state) {
            console.log("State is empty or invalid, skipping fetch.");
            return;
        }

        //Log the state value right before the fetch
        console.log(`Attempting to fetch for state: "${state}"`);

        fetch(`/syntax/${state}.txt`) //Los archivos deben estar en 'public' para el fetch pueda acceder a ellos
            .then(response => {
                console.log('Fetch response status (Syntax):', response.status);
                if (!response.ok) {
                    throw new Error(`Network response was not ok (Syntax). Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                setSyntax(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation (Syntax):', error);
            });
    }, [state]);

    return (

        <section className="syntax">
            <h2>Syntax</h2>
            <pre>{syntax.length === 0 ? 'Loading...' : syntax}</pre>

        </section>

    );

}

export default Syntax