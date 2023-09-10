import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import filmImg from '../../images/pic__COLOR_pic.jpg';
function MoviesCard({ card }) {
  const [like, setLike] = React.useState(false);
  function handleLikeToogle() {
    setLike(!like);
  }
  const { pathname } = useLocation();
  return (
    <div className='filmcard'>
      <img src={filmImg} className='filmcard__image' alt='Обложка фильма' />
      <div className='card__buttons'>
        {pathname === '/saved-movies' ? (
          <button type='button' className='card__button card__button_delete' />
        ) : (
          <button
            type='button'
            className={`card__button card__button${
              like ? '_active' : '_inactive'
            }`}
            onClick={handleLikeToogle}
          />
        )}
      </div>
      <div className='filmcard__description'>
        <h3 className='filmcard__title'>{card.title}</h3>

        <p className='filmcard__duration'>{card.duration}</p>
      </div>
    </div>
  );
}
export default MoviesCard;
