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
    <li className='filmcard'>
      <img src={filmImg} className='filmcard__image' alt={card.title} />
      <div className='filmcard__buttons'>
        {pathname === '/saved-movies' ? (
          <button type='button' className='filmcard__button filmcard__button_delete' />
        ) : (
          <button
            type='button'
            className={`filmcard__button filmcard__button${like ? '_active' : '_inactive'
              }`}
            onClick={handleLikeToogle}
          />
        )}
      </div>
      <div className='filmcard__description'>
        <h2 className='filmcard__title'>{card.title}</h2>

        <p className='filmcard__duration'>{card.duration}</p>
      </div>
    </li>
  );
}
export default MoviesCard;
