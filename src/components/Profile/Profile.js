import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Евгений!</h2>
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
            <div className='profile__line'></div>
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
          <button className='profile__btn' type='button'>
            Редактировать
          </button>
          <button className='profile__btn-out' type='button'>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}
export default Profile;
