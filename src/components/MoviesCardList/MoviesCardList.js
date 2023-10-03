import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  savedMovies,
  count,
  addMoreMovies,
  saveUserMovie,

  deleteUserMovie,
}) {
  const shownMovies = Array.isArray(movies) ? movies.slice(0, count) : [];
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {shownMovies.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            savedMovies={savedMovies}
            saveUserMovie={saveUserMovie}
            deleteUserMovie={deleteUserMovie}
          />
        ))}
      </ul>
      {movies.length > count ? (
        <div className='cards__button-container'>
          <button
            type='submit'
            className='cards__button'
            onClick={addMoreMovies}
          >
            Ещё
          </button>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}
export default MoviesCardList;
