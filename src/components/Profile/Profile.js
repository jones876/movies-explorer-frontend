import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, Евгений!</h1>
        <form className='profile__form' name='profile'>
          <fieldset className='profile__form-fieldset'>
            <div className='profile__input-container'>
              <input
                className='profile__input'
                type='text'
                placeholder='Имя'
                name='name'
                minLength='2'
                maxLength='30'
                id='name-input'
                // defaultValue='Евгений'
                required
              ></input>
            </div>
            <div className='profile__input-container'>
              <input
                className='profile__input'
                type='email'
                placeholder='E-mail'
                name='email'
                minLength='5'
                maxLength='30'
                id='email-input'
                // value='pochta@yandex.ru'
                required
              ></input>
            </div>
          </fieldset>
        </form>
        <div className='profile__wrap'>
          <button className='profile__btn' type='submit'>
            Редактировать
          </button>
          <Link to='/' className='profile__btn-out' >
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Profile;
