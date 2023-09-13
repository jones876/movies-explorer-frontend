import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';
function Login() {
  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип проекта' className='register__logo' />
        </Link>
        <h2 className='register__title'>Рады видеть!</h2>

        <form className='register__form' name='register'>
          <fieldset className='register__form-fieldset'>
            <div className='register__input-container'>
              <label className='register__input-label'>E-mail</label>
              <input
                className='register__input'
                type='email'
                placeholder='E-mail'
                name='email'
                minLength='5'
                maxLength='30'
                id='email-input'
                // value='pochta@yandex.ru|'
                required
              ></input>
            </div>
            <div className='register__input-container'>
              <label className='register__input-label'>Пароль</label>
              <input
                className='register__input'
                type='password'
                placeholder='Пароль'
                name='password'
                minLength='8'
                maxLength='30'
                id='password-input'
                //   value='111111111'
                required
              ></input>
            </div>
          </fieldset>

          <button className='register__button register__login-button' type='submit'>Войти</button>
          <div className='register__wrap'>
            <p className='register__wrap-text'>Ещё не зарегистрированы?</p>
            <Link to='/signup' className='register__wrap-link'>
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Login;
