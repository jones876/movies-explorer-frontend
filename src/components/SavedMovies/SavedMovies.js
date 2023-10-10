import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';

function SavedMovies({
  savedMovies,
  deleteUserMovie,
  searchQuery,
  isFoundMovie,
  shortMovies,
  checked,
  toggleCheckBox,
  searchSaved,
  changeSaved,
}) {
  return (
    <main className='saved'>
      <HeaderNav />
      <SearchForm
        handleSubmit={searchSaved}
        handleChange={changeSaved}
        searchQuery={searchQuery}
        toggleCheckBox={toggleCheckBox}
        checked={checked}
      />
      {isFoundMovie ? (
        <MoviesCardList
          movies={checked ? shortMovies : savedMovies}
          savedMovies={savedMovies}
          deleteUserMovie={deleteUserMovie}
        />
      ) : (
        <p className='movies__search-message'>Ничего не найдено</p>
      )}
      <Footer />
    </main>
  );
}
export default SavedMovies;
