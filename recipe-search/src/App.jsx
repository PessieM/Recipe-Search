import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
//import page components-may need to change!
import Home from "./Home";
import About from "./About";
import About from "./Details";
import Navbar from "./Navbar";  // Import the Navbar component
import Footer from "./Footer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
      <Navbar /> {/* Navbar at the top */}
      
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      </div>

      <Footer /> {/* Footer appears at the bottom */}
    </HashRouter>
    </>

        );
      }
      /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     */


export default App
