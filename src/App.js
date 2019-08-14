import React from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import route from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        { route }
      </div>
    </BrowserRouter>
  )
}

export default App
