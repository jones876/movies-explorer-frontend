import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
function MoviesCardList({ cards }) {
  const location = useLocation();
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      <div className='cards__button-container'>
        <button
          type='button'
          className={`cards__button cards__button_${location.pathname === '/saved-movies' ? 'saved' : ''
            }`}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}
export default MoviesCardList;
