import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MovieCart from '../components/MovieCart';
import MovieDetails from './MovieDetails';

function Home() {

  const [movieInfo, setMovieInfo] = useState([])
  const [loading, setLoading] = useState(true);

  const getInfo =() =>{
    fetch('https://www.omdbapi.com/?s=guardians&apikey=c1200ddb')
    .then((res) => res.json())
    .then((data) => { 
      setMovieInfo(data.Search);
      setLoading(false);
      console.log("data is : ", data);
    })
    .catch((err) => console.log("Fetch Error", err));
  };

  useEffect(() => {
    getInfo();
  }, []);


  return (

    <>
    
    <nav className='navbar bg-dark navbar-dark navbar-expand-md sticky-top'>
      <div className='container d-flex border-bottom'>
        <a href='#' className='navbar-brand'>
        <img src={logo} alt='logo' style={{width:'70px', height:'70px'}} />
        </a>
        <div className='navbar-nav'>
          <div className='d-flex'>
            <Link to={'/'} className='nav-link active'>Home</Link>
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

  
    <div className="container mt-4">
        {loading ? (
          <p> Is Loading ... </p>
        ) : (
          <div className="row">
            {movieInfo.map(item => (
              <div className="col-md-4 mb-4" key={item.imdbID}>
                <MovieCart movieInfo={item} />
              </div>
            ))}
          </div>
        )}
      </div>
  </> 
  )
}

export default Home;