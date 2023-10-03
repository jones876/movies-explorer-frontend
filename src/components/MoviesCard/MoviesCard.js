import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
function MoviesCard({ movie, savedMovies, saveUserMovie, deleteUserMovie }) {
  const savedMovie = Array.isArray(savedMovies)
    ? savedMovies.find((i) => i.movieId === movie.id)
    : null;
  const location = useLocation();
  const pathMovies = location.pathname === '/movies';

  const buttonSaveClassName = `filmcard__button ${
    savedMovie ? 'filmcard__button_active' : 'filmcard__button_inactive'
  }`;
  const imageUrl = pathMovies
    ? `${'https://api.nomoreparties.co'}${movie.image.url}`
    : `${movie.image}`;
  const movieName = movie.nameRU;
  const movieDuration = () => {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    if (hours > 0) {
      return `${hours}ч${minutes}м`;
    } else {
      return `${minutes}м`;
    }
  };

  function toggleClick() {
    if (savedMovie) {
      deleteUserMovie(savedMovie);
    } else {
      saveUserMovie(movie);
    }
  }

  function deleteClick() {
    deleteUserMovie(movie);
  }

  return (
    <li className='filmcard'>
      <a target='_blank' href={movie.trailerLink} rel='noreferrer'>
        <img src={imageUrl} className='filmcard__image' alt={movieName} />
      </a>

      <div className='filmcard__buttons'>
        {!pathMovies ? (
          <button
            type='submit'
            className='filmcard__button filmcard__button_delete'
            onClick={deleteClick}
          />
        ) : (
          <button
            type='button'
            className={buttonSaveClassName}
            onClick={toggleClick}
          />
        )}
      </div>
      <div className='filmcard__description'>
        <h2 className='filmcard__title'>{movieName}</h2>

        <p className='filmcard__duration'>{movieDuration(movie.duration)}</p>
      </div>
    </li>
  );
}
export default MoviesCard;
