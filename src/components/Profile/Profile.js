import './Profile.css';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderNav from '../HeaderNav/HeaderNav';

function Profile({ onUpdateUser, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const errors = {
    required: 'Обязательно для заполнения',
    name: 'Имя содержит недопустимые символы',
    email: 'Некорректный email',
    minLength: 'Введите не менее 2 символов',
    maxLength: 'Введите не более 30 символов',
  };

  const [formValid, setFormValid] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [name, setName] = useState(() => {
    return localStorage.getItem('name') || currentUser.name;
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem('email') || currentUser.email;
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  useEffect(() => {
    if (currentUser.name === name && currentUser.email === email) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [name, email, currentUser.name, currentUser.email]);

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    onUpdateUser({ name, email });
  }

  return (
    <>
      <HeaderNav />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, {name}</h1>
          <form
            className='profile__form'
            onSubmit={handleSubmit}
            name='profile'
            noValidate
          >
            <fieldset className='profile__form-fieldset'>
              <div className='profile__input-container'>
                <input
                  className='profile__input'
                  type='text'
                  // placeholder={name}
                  name='name'
                  minLength='2'
                  maxLength='30'
                  id='name-input'
                  onChange={handleErrorName}
                  value={name}
                  required
                ></input>
                <span className='register__error'>{errorName}</span>
              </div>
              <div className='profile__input-container'>
                <input
                  className='profile__input'
                  type='email'
                  // placeholder={email}
                  name='email'
                  minLength='5'
                  maxLength='30'
                  id='email-input'
                  onChange={handleErrorEmail}
                  value={email}
                  required
                ></input>
                <span className='register__error'>{errorEmail}</span>
              </div>
            </fieldset>
          </form>
          <div className='profile__wrap'>
            <button
              type='submit'
              className={`profile__btn ${
                !formValid ? 'profile__btn_disabled' : ''
              }`}
              disabled={!formValid}
              onClick={handleSubmit}
            >
              Редактировать
            </button>
            <Link to='/' className='profile__btn-out' onClick={signOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
export default Profile;
