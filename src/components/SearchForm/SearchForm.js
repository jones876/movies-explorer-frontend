import React from 'react';

import './SearchForm.css';

import searchButton from '../../images/find-3.svg';
function SearchForm({
  handleSubmit,
  handleChange,
  searchQuery,
  toggleCheckBox,
  checked,
}) {
  return (
    <section className='search'>
      <div className='search__container'>
        <form
          className='search__form'
          name='search-form'
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className='search__form-input'>
            <input
              type='text'
              className='search__input'
              placeholder='Фильм'
              onChange={handleChange}
              value={searchQuery}
              required
            ></input>

            <button type='submit' className='search__input-btn'>
              <img
                src={searchButton}
                alt='Кнопка поиска'
                className='search__btn'
              />
            </button>
          </fieldset>

          <div className='search__filter '>
            <label className='switch-checkbox__switch'>
              <input
                type='checkbox'
                id='checkbox'
                checked={checked}
                onChange={toggleCheckBox}
              />
              <span className='switch-checkbox__slider switch-checkbox__round'></span>
            </label>
            <span className='search__filter-text'>Короткометражки</span>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
