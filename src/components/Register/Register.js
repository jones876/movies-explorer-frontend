import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип проекта' className='register__logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>

        <form className='register__form' name='register'>
          <fieldset className='register__form-fieldset'>
            <div className='register__input-container'>
              <label className='register__input-label'>Имя</label>
              <input
                className='register__input'
                type='text'
                placeholder='Имя'
                name='name'
                minLength='2'
                maxLength='30'
                id='name-input'
                // defaultValuevalue='Евгений'
                required
              ></input>
            </div>
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
                // value='111111111'
                required
              ></input>
            </div>
          </fieldset>
          <span className='register__error'>Что-то пошло не так...</span>
          <button className='register__button' type='submit'>
            Зарегистрироваться
          </button>
          <div className='register__wrap'>
            <p className='register__wrap-text'>Уже зарегистрированы?</p>
            <Link to='/signin' className='register__wrap-link'>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Register;
