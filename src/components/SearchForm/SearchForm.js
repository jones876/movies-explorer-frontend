import './SearchForm.css';
import searchButton from '../../images/find-3.svg';
function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>

          <fieldset className='search__form-iinput'>
            <input
              type='text'
              className='search__input'
              placeholder='Фильм'
              required
            ></input>
            <img src={searchButton} alt='Кнопка поиска' className='search__btn' />
          </fieldset>

          <div className='search__filter'>
            <button type='button' className='search__filter-button'></button>
            <span className='search__filter-text'>Короткометражки</span>
          </div>
        </form>

      </div>
    </section>
  );
}
export default SearchForm;
