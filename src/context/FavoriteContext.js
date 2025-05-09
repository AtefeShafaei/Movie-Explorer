import React, { createContext, useState, useContext, useEffect } from 'react';


const FavoriteContext = createContext();


function FavoriteProvider({children}) {

    const [favorites, setFavorites] = useState([]);
   
    useEffect(() => {
        const data = localStorage.getItem('favorites');
        if (data) {
        setFavorites(JSON.parse(data));
        }

    }, []);

      useEffect(() => {
        if (favorites.length > 0) {
        localStorage.setItem('favorites', JSON.stringify(favorites))}
      }, [favorites])

      
    console.log("favorite: ", favorites)


    const addToFavorite = (movie) =>{
        const existing = favorites.find((item) => item.imdbID === movie.imdbID)
        console.log("existing :" , existing)
        if(!existing) {
            setFavorites([...favorites, movie]);
        }
    }

    const removeFavorite = (movie) =>{
        const updatedFavorites = favorites.filter((item) => item.imdbID !== movie.imdbID);
        setFavorites(updatedFavorites);
        console.log("movie is:" ,movie)
    }


  return (
    <FavoriteContext.Provider value={{favorites, addToFavorite, removeFavorite}}>
        {children}
    </FavoriteContext.Provider>
  )
}

const useCart = () => useContext(FavoriteContext)

export {useCart};

export default FavoriteProvider;