import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import pic from '../assets/about.jpg';
import "../index.css";




function Aboutus() {
  return (
    <>

    <nav className='navbar bg-dark navbar-dark navbar-expand-md sticky-top'>
      <div className='container d-flex border-bottom'>
        <a href='#' className='navbar-brand'>
        <img src={logo} alt='logo' style={{width:'70px', height:'70px'}} />
        </a>
        <div className='navbar-nav'>
          <div className='d-flex'>
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link to={'/favorit'} className='nav-link ms-4'>Favorites</Link>
            <Link to={'/aboutus'} className='nav-link ms-4 active'>About</Link>
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

    <div className='hero-slider'>
        <div className='slider container mb-5'>
            <img src={pic} alt='aboutpic' className='img-fluid slide'/>
            
        </div>
    </div>
    
    <div className='container text-white text-center mt-5'>
        <h3 className='mb-5 text-danger'>Welcome To My Website</h3>
        <p>I'm Atefe , a frontend developer</p>
        <p>I made this website using  " HTML, CSS, BootStrap, JS, React "</p>
        <br />
        <ul className="list-unstyled">
        I have used 
            <li><span className='text-danger fw-bold'>React-Router : </span> to move between pages</li>
            <li><span className='text-danger fw-bold'>useContext : </span>I wanted to make favorites information and functions related to adding/removing items to favorites globally available throughout my application</li>
        </ul>
    </div>

    <footer className='text-white mt-5 mb-2 container border-top'>
        <div className='d-flex justify-content-between align-items-center'>
        <a
        data-mdb-ripple-init className="social-btn mt-2"
        
        href="https://www.linkedin.com/in/masoumeh-shafaei-23272b24a/"
        role="button"
        title='My Linkedin'>
            <i className="fab fa-linkedin"></i>
        </a>

        <a
        data-mdb-ripple-init className="social-btn mt-2"
        
        href="https://github.com/AtefeShafaei"
        role="button"
        title='My Github'>
            <i className="fab fa-github"></i>
        </a>


        </div>
    </footer>
    
    
    
    
    
    </>
  )
}

export default Aboutus