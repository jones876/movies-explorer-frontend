import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onRegister }) {
  const errors = {
    required: 'Обязательно для заполнения',
    name: 'Имя содержит недопустимые символы',
    email: 'Некорректный email',
    minLength: 'Введите не менее 2 символов',
    maxLength: 'Введите не более 30 символов',
    passwordLength: 'Пароль должен быть не меньше 8 символов',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  const [errorName, setErrorName] = useState('');
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

  function handleErrorName(e) {
    const inputName = e.target;

    if (inputName.value.length < 1) {
      setErrorName(errors.required);
    } else if (inputName.value.length < 2) {
      setErrorName(errors.minLength);
    } else if (inputName.value.length > 30) {
      setErrorName(errors.maxLength);
    } else {
      setErrorName('');
    }
    setName(inputName.value);
  }

  function handleErrorPassword(e) {
    const inputPassword = e.target;
    if (inputPassword.value.length < 1) {
      setErrorPassword(errors.required);
    } else if (inputPassword.value.length < 8) {
      setErrorPassword(errors.passwordLength);
    } else {
      setErrorPassword('');
    }
    setPassword(inputPassword.value);
  }
  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      !errorName &&
      !errorName &&
      !errorPassword
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, email, password, errorName, errorEmail, errorPassword]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    onRegister({ email, name, password });
  }
  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img src={logo} alt='Логотип проекта' className='register__logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>

        <form
          className='register__form'
          name='register'
          onSubmit={handleSubmit}
          noValidate
        >
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
                value={name}
                onChange={handleErrorName}
                required
              ></input>
              <span className='register__error'>{errorName}</span>
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
                minLength='8'
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
