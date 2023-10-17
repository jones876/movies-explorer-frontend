import React from 'react';
import { useState, useEffect } from 'react';
import './Movies.css';
import { useResize } from '../../hooks/useResize';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';
import * as moviesApi from '../../utils/MoviesApi';
import InfoTooltip from '../InfoTool/infoTool';
import False from '../../images/False.svg';
import {
  PC_SCREEN_SIZE,
  TABLET_SCREEN_SIZE,
  PHONE_SCREEN_SIZE,
  PC_ADD_CARDS,
  TABLET_ADD_CARDS,
  PC_START_CARDS,
  TABLET_START_CARDS,
  PHONE_START_CARDS,
  SHORT_MOVIE_DURATION,
} from '../../utils/constans';

function Movies({ allMovies, savedMovies, saveUserMovie, deleteUserMovie }) {
  const width = useResize();
  const [isLoad, setIsLoad] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [isFoundMovie, setIsFoundMovie] = useState(true);
  const [count, setCount] = useState(12);
  const [firstSearch, setFirstSearch] = useState(true);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (isLoad && allMovies) {
      searchMovie(searchQuery);
    }
  }, [isLoad, allMovies, searchQuery]);

  useEffect(() => {
    if (isLoad) {
      JSON.parse(localStorage.getItem('searchMovies'));
      searchMovie(searchQuery);
    }
    setTimeout(() => setIsLoad(false), 500);
  }, [isLoad, allMovies, searchQuery, setFindMovies, searchMovie]);

  useEffect(() => {
    if (localStorage.getItem('searchMovies')) {
      const movies = JSON.parse(localStorage.getItem('searchMovies'));
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
    if (width >= PC_SCREEN_SIZE) {
      setCount(PC_START_CARDS);
    } else if (width < PC_SCREEN_SIZE && width > PHONE_SCREEN_SIZE) {
      setCount(TABLET_START_CARDS);
    } else if (width <= PHONE_SCREEN_SIZE) {
      setCount(PHONE_START_CARDS);
    }
  }, [width]);

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= SHORT_MOVIE_DURATION;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, findMovies]);

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
    if (width >= PC_SCREEN_SIZE) {
      setCount(count + PC_ADD_CARDS);
    } else if (width >= TABLET_SCREEN_SIZE) {
      setCount(count + TABLET_ADD_CARDS);
    } else if (width < TABLET_SCREEN_SIZE) {
      setCount(count + TABLET_ADD_CARDS);
    }
  }
  function resetMovies() {
    if (width >= PC_SCREEN_SIZE) {
      setCount(PC_START_CARDS);
    } else if (width < PC_SCREEN_SIZE && width > PHONE_SCREEN_SIZE) {
      setCount(TABLET_START_CARDS);
    } else if (width <= PHONE_SCREEN_SIZE) {
      setCount(PHONE_START_CARDS);
    }
  }
  function closeInfoTool() {
    setIsInfoTooltip(false);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function searchMovie(query) {
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (firstSearch) {
      setIsLoad(true);
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          setFirstSearch(false);
          const searchResults = data.filter((movie) => {
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
            setIsFoundMovie(true);
            setFindMovies(searchResults);
          }
          resetMovies();

          localStorage.setItem('searchMovies', JSON.stringify(searchResults));
          
        })
        .catch(() => {
          setIsInfoTooltip(true);
          setStatus({
            image: False,
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
          });
        });
    } else {
      if (allMovies && allMovies.length > 0) {
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
          setIsFoundMovie(true);
          setFindMovies(searchResults);
        }
        resetMovies();

        localStorage.setItem('searchMovies', JSON.stringify(searchResults));
      } else {
        resetMovies();
        setFindMovies([]);
        setIsFoundMovie(false);
        localStorage.setItem('searchMovies', JSON.stringify([]));
      }
    }
  }
  return (
    <main className='movies'>
      <InfoTooltip
        isOpen={isInfoTooltip}
        status={status}
        onClose={closeInfoTool}
      />
      <HeaderNav />
      <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchQuery={searchQuery}
        toggleCheckBox={toggleCheckBox}
        checked={checked}
      />
      {isLoad && firstSearch ? (
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
