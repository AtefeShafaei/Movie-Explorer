import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorit from './pages/Favorit';
import Aboutus from './pages/Aboutus';

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorit' element={<Favorit />} />
        <Route path='/moviedetails/:imdbID' element={<MovieDetails />} />
        <Route path='/aboutus' element={<Aboutus />} />
    </Routes>
  )
}

export default App;