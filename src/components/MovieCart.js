import React from 'react';
import { Link } from 'react-router-dom';

function MovieCart({ movieInfo }) {

  return (
    <div
    className="card h-100 d-flex flex-column glass-card"
        style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // for Safari
        boxShadow: "0 8px 32px 0 rgba(64, 64, 65, 0.37)",
        borderRadius: "10px",
        color: "white"
        }}
    >

      <img
        src={movieInfo.Poster}
        className="card-img-top p-3"
        alt={movieInfo.Title}
        style={{ height: '250px', objectFit: 'contain' }}
      />

      <div className="card-body d-flex flex-column">
        {/* عنوان */}
        <h5 className="card-title text-center text-white">{movieInfo.Title}</h5>

        {/* بخش پایینی که همیشه در ته کارت قرار می‌گیره */}
        <div className="mt-auto d-flex justify-content-between align-items-center pt-3 ">
          <div>
            <p className="card-text">{movieInfo.Year}</p>
            <hr />
            <p className="card-text">{movieInfo.Type}</p>
          </div>

          <Link to= {`/moviedetails/${movieInfo.imdbID}`} className="btn btn-danger btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCart;
    