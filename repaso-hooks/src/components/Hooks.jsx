import { useState, useEffect } from "react";

function Hooks(props) {
    const state = props.hook;
    const [explanation, setExplanation] = useState('');
    const [syntax, setSyntax] = useState('');
    const [usage, setUsage] = useState('');

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
        <>
            <div>
                {`Prueba ${state}`}
                <section className="explanation">
                    <h2>Explanation</h2>
                    <p>{explanation.length === 0 ? 'Loading...' : explanation}</p>
                </section>

                <section className="syntax">
                    <h2>Syntax</h2>
                    <pre>{syntax.length === 0 ? 'Loading...' : syntax}</pre>

                </section>

                <section className="usage">
                    <h2>Usage</h2>
                    <p>{usage.length === 0 ? 'Loading...' : usage}</p>
                </section>
            </div>

            <div className="interactive-example">

            </div>

        </>
    )

}

export default Hooks