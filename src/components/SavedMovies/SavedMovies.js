import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedCards from '../../utils/savedMovies';
function SavedMovies() {
  return (
    <section className='saved'>
      <SearchForm />
      <MoviesCardList cards={savedCards} />
    </section>
  );
}
export default SavedMovies;
