import React from 'react'
import "./App.css"
import { BrowserRouter ,Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<><Banner/><Movies/></>}/>
  
    <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App