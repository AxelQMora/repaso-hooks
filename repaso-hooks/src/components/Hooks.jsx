import { useState, useEffect } from "react";
import Explanation from "./hooks-components/explanations";
import Syntax from "./hooks-components/syntax";
import Usage from "./hooks-components/usage";

function Hooks() {
    const [state, setState] = useState('');
    useEffect(() => {
        console.log(state)
    }, [state]);



    return (
        <>
            <h1>{state}</h1>
            <div>
                <button onClick={() => setState('useCallback')} >useCallback</button>
                <button onClick={() => setState('useContext')} >useContext</button>
                <button onClick={() => setState('useEffect')} >useEffect</button>
                <button onClick={() => setState('useMemo')} >useMemo</button>
                <button onClick={() => setState('useReducer')} >useReducer</button>
                <button onClick={() => setState('useRef')} >useRef</button>
                <button onClick={() => setState('useState')} >useState</button>
            </div>
            <div className="info-container">
                {`Prueba ${state}`}
                <Explanation state={state} />
                <Syntax state={state} />
                <Usage state={state} />

            </div>

            <div className="interactive-example">

            </div>

        </>
    )

}

export default Hooks