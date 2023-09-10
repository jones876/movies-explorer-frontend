import { Link, useLocation } from 'react-router-dom';
import './Popup.css';

function Popup() {
  const location = useLocation().pathname;

  function handleClick() {
    document.querySelector('.popup').classList.remove('popup_opened');
  }
  return (
    <nav className='popup'>
      <div className='popup__container'>
        <Link to='/' className='popup__link' onClick={handleClick}>
          Главная
        </Link>
        <Link
          to='/movies'
          className={`popup__link ${
            location === '/movies' && 'popup__link_current'
          }`}
          onClick={handleClick}
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`popup__link ${
            location === '/saved-movies' && 'popup__link_current'
          }`}
          onClick={handleClick}
        >
          Сохранённые фильмы
        </Link>

        <Link to='/profile' className='popup__link-btn'>
          Аккаунт
        </Link>
        <button className='popup__btn-close' onClick={handleClick} />
      </div>
    </nav>
  );
}

export default Popup;
