import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import './Login.css';

function Login({ onLogin }) {
  const errors = {
    required: 'Обязательно для заполнения',
    email: 'Некорректный email',
    minLength: 'Введите не менее 2 символов',
    maxLength: 'Введите не более 30 символов',
  };

  const [formValid, setFormValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  function handleErrorEmail(e) {
    const inputEmail = e.target;
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      inputEmail.value
    );
    if (inputEmail.value.length < 1) {
      setErrorEmail(errors.required);
    } else if (!validEmail) {
      setErrorEmail(errors.email);
    } else {
      setErrorEmail('');
    }
    setEmail(inputEmail.value);
  }

  function handleErrorPassword(e) {
    const inputPassword = e.target;
    if (inputPassword.value.length < 1) {
      setErrorPassword(errors.required);
    } else {
      setErrorPassword('');
    }
    setPassword(inputPassword.value);
  }

  useEffect(() => {
    if (email && password && !errorEmail && !errorPassword) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password, errorEmail, errorPassword]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({ email, password });
  }
  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип проекта' className='register__logo' />
        </Link>
        <h2 className='register__title'>Рады видеть!</h2>

        <form
          className='register__form'
          name='register'
          onSubmit={handleSubmit}
          noValidate
        >
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
                value={email}
                onChange={handleErrorEmail}
                required
              ></input>
              <span className='register__error'>{errorEmail}</span>
            </div>
            <div className='register__input-container'>
              <label className='register__input-label'>Пароль</label>
              <input
                className='register__input'
                type='password'
                placeholder='Пароль'
                name='password'
                minLength='4'
                maxLength='30'
                id='password-input'
                value={password}
                onChange={handleErrorPassword}
                required
              ></input>
              <span className='register__error'>{errorPassword}</span>
            </div>
          </fieldset>

          <button
            type='submit'
            className={`register__button ${
              !formValid ? 'register__button_disabled' : ''
            }`}
            disabled={!formValid}
          >
            Войти
          </button>
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
