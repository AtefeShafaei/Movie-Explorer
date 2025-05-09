import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/FavoriteContext';

function Favorit() {

  const {favorites, removeFavorite} = useCart();


  return (
    
    // --------------- Header
    <>
    <nav className='navbar bg-dark navbar-dark navbar-expand-md'>
      <div className='container d-flex border-bottom'>
        <a href='#' className='navbar-brand'>
        <img src={logo} alt='logo' style={{width:'70px', height:'70px'}} />
        </a>
        <div className='navbar-nav'>
          <div className='d-flex'>
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link to={'/favorit'} className='nav-link ms-4 active'>Favorites</Link>
            <Link to={'/aboutus'} className='nav-link ms-4'>About</Link>
          </div>
        </div>
        <div>
          <form className="d-flex">
            <input className="form-control me-2 text-dark" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
        </div>
      </div>
    </nav>

    <div>
    {favorites.map((i) => (
      <div className="container my-4 border-bottom" key={i.imdbID}>
      <div className="row">
        <div className="col-md-4 text-white pt-3">
        <h4>{i.Title}</h4>
          <p><strong>Year: </strong> {i.Year}</p>
          <p><strong>Genre: </strong> {i.Genre}</p>
          <p><strong>Runtime: </strong> {i.Runtime}</p>
          <p className='btn btn-success'><strong>imdbRating: </strong> {i.imdbRating}</p>
          <p><strong>Director: </strong> {i.Director}</p>
          <p><strong>Actors: </strong> {i.Actors},...</p>
          <p><strong>Plot: </strong> {i.Plot}</p>
          <button className='btn btn-danger my-3' onClick={() => removeFavorite(i)}> - Remove From Favorites</button>
          
        </div>
        <div className="col-md-8 d-flex justify-content-end">
        <img src={i.Poster} className="img-fluid rounded mb-2" alt={i.Title} />
        </div>
      </div>
    </div>
    ))}
    </div>




  </>
  )
}

export default Favorit