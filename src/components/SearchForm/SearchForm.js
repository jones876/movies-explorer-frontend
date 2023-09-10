import './SearchForm.css';
import searchButton from '../../images/find-3.svg';
function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            required
          ></input>
          <img src={searchButton} alt='Кнопка поиска' className='search__btn' />
        </form>

        <div className='search__filter'>
          <button type='button' className='search__filter-button'></button>
          <span className='search__filter-text'>Короткометражки</span>
        </div>
        <div className='search__line'></div>
      </div>
    </section>
  );
}
export default SearchForm;
