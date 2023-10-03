import { Link, useLocation } from 'react-router-dom';
import './Popup.css';

function Popup() {
  const location = useLocation().pathname;

  function handleClick() {
    document.querySelector('.popup').classList.remove('popup_opened');
  }
  return (
    <nav className='popup'>
      <ul className='popup__container'>
        <li>
          <Link to='/' className='popup__link' onClick={handleClick}>
            Главная
          </Link>
        </li>
        <li>
          <Link
            to='/movies'
            className={`popup__link ${location === '/movies' && 'popup__link_current'
              }`}
            onClick={handleClick}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            to='/saved-movies'
            className={`popup__link ${location === '/saved-movies' && 'popup__link_current'
              }`}
            onClick={handleClick}
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li>
          <Link to='/profile' className='popup__link-btn' onClick={handleClick}>
            Аккаунт
          </Link>
        </li>


      </ul>


      <button className='popup__btn-close' type='button' onClick={handleClick} />
    </nav>
  );
}

export default Popup;
