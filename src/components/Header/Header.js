import logo from '../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип проекта' className='header__logo' />
        </Link>
        <nav className='header__nav'>
          <Link to='/signup' className='header__signup-btn'>
            Регистрация
          </Link>
          <Link to='/signin' className='header__signin-btn'>
            Войти
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
