import './HeaderNav.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Popup from '../Popup/Popup';
function HeaderNav() {
  return (
    <header className='header'>
      <div className='header__nav-container'>
        <Link to='/'>
          <img src={logo} alt='Логотип пректа' className='header__logo' />
        </Link>
        <Popup />
        <Navigation />
      </div>
    </header>
  );
}
export default HeaderNav;
