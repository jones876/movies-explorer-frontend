import './Navigation.css';
import React , { useState, useEffect }from 'react';
import { Link, useLocation } from 'react-router-dom';
import Popup from '../Popup/Popup';

function Navigation() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/movies');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  function handleClick() {
    document.querySelector('.popup').classList.add('popup_opened');
  }
  return (
    <>
      <Popup />
  
      <nav className='navigation'>
      <Link 
        to='/movies' 
        className={`navigation__link ${activeLink === '/movies' ? 'navigation__link-active' : ''}`}
      >
        Фильмы
      </Link>
      <Link 
        to='/saved-movies' 
        className={`navigation__link ${activeLink === '/saved-movies' ? 'navigation__link-active' : ''}`}
      >
        Сохранённые фильмы
      </Link>
    </nav>
      <Link to='/profile' className='header__link-btn'>
        Аккаунт
      </Link>
      <button className='header__button' onClick={handleClick}></button>
    </>
  );
}
export default Navigation;
