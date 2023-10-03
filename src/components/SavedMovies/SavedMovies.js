import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedCards from '../../utils/savedMovies';
function SavedMovies() {
  return (
    <main className='saved'>
      <SearchForm />
      <MoviesCardList cards={savedCards} />
    </main>
  );
}
export default SavedMovies;
