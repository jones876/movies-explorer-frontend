import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/Movies';
function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
    </section>
  );
}
export default Movies;
