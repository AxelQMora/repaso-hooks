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
            <nav>
                <button className="nav-buttons nav-btn" onClick={() => setState('useCallback')} >useCallback</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useContext')} >useContext</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useEffect')} >useEffect</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useMemo')} >useMemo</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useReducer')} >useReducer</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useRef')} >useRef</button>
                <button className="nav-buttons nav-btn"  onClick={() => setState('useState')} >useState</button>
            </nav>

            <div className="main-content">
            <div className="container inner-containers info-container">
                {`Prueba ${state}`}
                <Explanation state={state} />
                <Syntax state={state} />
                <Usage state={state} />

            </div>

            <div className="container interactive-example">

            </div>
            </div>

        </>
    )

}

export default Hooks