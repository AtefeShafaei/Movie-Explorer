import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/FavoriteContext';

function MovieDetails() {

  const {favorites, addToFavorite} = useCart();
  const { imdbID } = useParams()
  console.log(imdbID)
  const [movieDetails, setMovieDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(imdbID){
      fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=c1200ddb`)
      .then((res) => res.json())
      .then((data) => {
        if(data.Response === "True"){
          setMovieDetails(data)
        } else {
          console.log("Movie not found")
        }
        setLoading(false)
      })
    }
  }, [imdbID])
  

  return (
    // --------------- Header
    <>
    <nav className='navbar bg-dark navbar-dark navbar-expand-md '>
      <div className='container d-flex border-bottom'>
        <a href='#' className='navbar-brand'>
        <img src={logo} alt='logo' style={{width:'70px', height:'70px'}} />
        </a>
        <div className='navbar-nav'>
          <div className='d-flex'>
            <Link className='nav-link ms-4 active'>Details</Link>
            <Link to={'/'} className='nav-link ms-4'>Home</Link>
            <Link to={'/favorit'} className='nav-link ms-4'>Favorites</Link>
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


    <div className=''>
      {loading ? (
        <p>Is Loading .....</p>
      ):(
        <>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 text-white pt-3">
            <h2>{movieDetails.Title}</h2>
              <p><strong>Year: </strong> {movieDetails.Year}</p>
              <p><strong>Genre: </strong> {movieDetails.Genre}</p>
              <p><strong>Runtime: </strong> {movieDetails.Runtime}</p>
              <p className='btn btn-success'><strong>imdbRating: </strong> {movieDetails.imdbRating}</p>
              <p><strong>Director: </strong> {movieDetails.Director}</p>
              <p><strong>Actors: </strong> {movieDetails.Actors},...</p>
              <p><strong>Plot: </strong> {movieDetails.Plot}</p>
              <button className='btn btn-danger my-3' onClick={() => addToFavorite(movieDetails)}> + Add To Favorite</button>
              
            </div>
            <div className="col-md-8 d-flex justify-content-end">
            <img src={movieDetails.Poster} className="img-fluid rounded" alt={movieDetails.Title} />
            </div>
          </div>
        </div>
        
        </>
      )}
    </div>
    </>

    


  )
}

export default MovieDetails