import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';

function Navigation() {
  function handleClick() {
    document.querySelector('.popup').classList.add('popup_opened');
  }
  return (
    <>
      <Popup />
      <nav className='navigation'>
        <Link to='/movies' className='navigation__link navigation__link-active'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='navigation__link '>
          Сохранённые фильмы
        </Link>
      </nav>
      <Link to='/profile' className='navigation__link-btn'>
        Аккаунт
      </Link>
      <button
        className='navigation__popup-button'
        onClick={handleClick}
      ></button>
    </>
  );
}
export default Navigation;
