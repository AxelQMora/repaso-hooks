import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Hooks from './components/Hooks';
import './App.css'
import { useState, useEffect} from 'react';




function App() {

  const [state, setState] = useState('');
  useEffect(() => {
    console.log(state)
  }, [state]);



  return (
    <BrowserRouter>
        <>
        <h1>{state}</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/hooks'>Hooks</Link>
          </nav>

          <div>
            <button onClick={() => setState('useCallback')} >useCallback</button>
            <button onClick={() => setState('useContext')} >useContext</button>
            <button onClick={() => setState('useEffect')} >useEffect</button>
            <button onClick={() => setState('useMemo')} >useMemo</button>
            <button onClick={() => setState('useReducer')} >useReducer</button>
            <button onClick={() => setState('useRef')} >useRef</button>
            <button onClick={() => setState('useState')} >useState</button>
          </div> 
        </>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks hook={state} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App