import React from 'react';
import { useState, useEffect } from 'react';
import './Movies.css';
import { useResize } from '../../hooks/useResize';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';

function Movies({ allMovies, savedMovies, saveUserMovie, deleteUserMovie }) {
  const width = useResize();
  const [isLoad, setIsLoad] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [isFoundMovie, setIsFoundMovie] = useState(true);
  const [count, setCount] = useState(12);

  useEffect(() => {
    if (isLoad) {
      JSON.parse(localStorage.getItem('searchMovies'));
      searchMovie(searchQuery);
    }
    setTimeout(() => setIsLoad(false), 1500);
  }, [isLoad, allMovies, searchQuery, setFindMovies, searchMovie]);

  useEffect(() => {
    if (localStorage.getItem('searchMovies')) {
      const movies = JSON.parse(localStorage.getItem('searchMovies'), []);
      setFindMovies(movies);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('checked')) {
      const checked = JSON.parse(localStorage.getItem('checked'));
      setChecked(checked);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('searchQuery')) {
      const query = JSON.parse(localStorage.getItem('searchQuery'));
      setSearchQuery(query);
    }
  }, []);

  useEffect(() => {
    if (width >= 1280) {
      setCount(12);
    }

    if (width < 1280 && width > 767) {
      setCount(8);
    }
    if (width <= 767) {
      setCount(5);
    }
  }, [width]);

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function searchMovie(query) {
    const searchResults = allMovies.filter((movie) => {
      const movieName = movie.nameRU.toLowerCase();
      const movieNameEn = movie.nameEN.toLowerCase();
      return (
        movieName.includes(query.toLowerCase()) ||
        movieNameEn.includes(query.toLowerCase())
      );
    });
    if (searchResults.length < 1) {
      setIsFoundMovie(false);
    } else {
      setFindMovies(searchResults);
      setIsFoundMovie(true);
      localStorage.setItem('searchMovies', JSON.stringify(searchResults));
    }
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
    localStorage.setItem('searchQuery', JSON.stringify(e.target.value));
  }

  function toggleCheckBox() {
    setChecked(!checked);
    localStorage.setItem('checked', JSON.stringify(!checked));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoad(true);
  }
  function addMoreMovies() {
    if (width >= 1280) {
      setCount(count + 3);
    } else if (width >= 990) {
      setCount(count + 2);
    } else if (width < 990) {
      setCount(count + 2);
    }
  }

  return (
    <main className='movies'>
      <HeaderNav />
      <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchQuery={searchQuery}
        toggleCheckBox={toggleCheckBox}
        checked={checked}
      />
      {isLoad ? (
        <Preloader />
      ) : isFoundMovie ? (
        <MoviesCardList
          movies={checked ? shortMovies : findMovies}
          savedMovies={savedMovies}
          count={count}
          addMoreMovies={addMoreMovies}
          saveUserMovie={saveUserMovie}
          deleteUserMovie={deleteUserMovie}
        />
      ) : (
        <p className='movies__search-message'>Ничего не найдено</p>
      )}
      <Footer />
    </main>
  );
}
export default Movies;
