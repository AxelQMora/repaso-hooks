import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Hooks from './components/Hooks';
import './App.css'




function App() {

  return (
    <BrowserRouter>
        <>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/hooks'>Hooks</Link>
          </nav>
        </>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App