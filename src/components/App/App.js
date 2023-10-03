import '../App/App.css';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import HeaderNav from '../HeaderNav/HeaderNav';
import Movies from '../Movies/Movies';
import Popup from '../Popup/Popup';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import InfoTooltip from '../InfoTool/infoTool';
import True from '../../images/True.svg';
import False from '../../images/False.svg';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [status, setStatus] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);

  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem('allMovies')),
    []
  );
  const [checked, setChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFoundMovie, setIsFoundMovie] = useState(true);

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    auth
      .getContent(token)
      .then((data) => {
        if (data) {
          setLoggedIn(true);

          navigate('/movies');
        }
        return;
      })
      .catch(console.error);
  };
  useEffect(() => {
    checkToken();
  }, []);

  function getUserInfo() {
    mainApi
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signOut() {
    auth
      .signout()
      .then((res) => {
        localStorage.clear();
        setCurrentUser({});
        setLoggedIn(false);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const registerUser = (user) => {
    auth
      .register(user)
      .then(() => {
        setIsInfoTooltip(true);
        setStatus({
          image: True,
          text: 'Вы успешно зарегистрировались!',
        });
        loginUser(user);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setStatus({
          image: False,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };

  const loginUser = (user) => {
    auth

      .login(user)
      .then(({ token }) => {
        if (token) {
          setLoggedIn(true);
          setCurrentUser(user);
          setIsInfoTooltip(true);
          setStatus({
            image: True,
            text: 'Вы успешно авторизовались!',
          });
          getUserInfo();
          navigate('/movies');
        }
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setStatus({
          image: False,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };

  const updateProfile = (user) => {
    mainApi
      .sendUserInfo(user)
      .then((user) => {
        setCurrentUser(user);
        setIsInfoTooltip(true);
        setStatus({
          image: True,
          text: 'Данные обновлены!',
        });
        navigate('/movies');
      })
      .catch(() => {
        setIsLoad(false);
        setIsInfoTooltip(true);
        setStatus({
          image: False,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };

  const saveUserMovie = (movie) => {
    mainApi
      .saveMovies(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        setIsInfoTooltip(true);
        setStatus({
          image: True,
          text: 'Фильм успешно сохранен!',
        });
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setStatus({
          image: False,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };

  const deleteUserMovie = (movie) => {
    const movieId = movie._id;
    mainApi
      .deleteMovies(movieId)
      .then(() => {
        const filteredMovies = savedMovies.filter((i) => i._id !== movieId);
        setSavedMovies(filteredMovies);
        setIsInfoTooltip(true);
        setStatus({
          image: True,
          text: 'Фильм успешно удален!',
        });
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setStatus({
          image: False,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
      });
  };

  function closeInfoTool() {
    setIsInfoTooltip(false);
  }

  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          setAllMovies(data);
          JSON.parse(localStorage.getItem('allMovies'));
        })
        .catch(() => {
          setIsInfoTooltip(true);
          setStatus({
            image: False,
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
          });
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          localStorage.setItem('savedMovies', JSON.stringify(data));
          setSavedMovies(data);
          JSON.parse(localStorage.getItem('savedMovies'));
        })
        .catch(() => {
          setIsInfoTooltip(true);
          setStatus({
            image: False,
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
          });
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    setSavedMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (checked) {
      const shortMovies = savedMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, savedMovies, setShortMovies]);

  useEffect(() => {
    if (isLoad) {
      if (savedMovies) {
        const searchResults = savedMovies.filter((movie) => {
          const movieName = movie.nameRU.toLowerCase();
          return movieName.includes(searchQuery.toLowerCase());
        });
        if (searchResults.length < 1) {
          setIsFoundMovie(false);
        } else {
          setIsFoundMovie(true);
          setSavedMovies(searchResults);
          console.log(searchResults);
        }
      }
    }
    setTimeout(() => setIsLoad(false), 1500);
  }, [isLoad, savedMovies, searchQuery]);

  function toggleCheckBox() {
    setChecked(!checked);
  }

  function searchSaved(e) {
    e.preventDefault();
    setIsLoad(true);
  }

  function changeSaved(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Popup />
        <InfoTooltip
          isOpen={isInfoTooltip}
          status={status}
          onClose={closeInfoTool}
        />

        <Routes>
          <Route
            path='/signup'
            element={
              loggedIn ? (
                <Navigate to='/movies' />
              ) : (
                <Register onRegister={registerUser} />
              )
            }
          />
          <Route
            path='/signin'
            element={
              loggedIn ? (
                <Navigate to='/movies' />
              ) : (
                <Login onLogin={loginUser} />
              )
            }
          />
          <Route
            exact
            path='/'
            element={
              <>
                {loggedIn ? <HeaderNav /> : <Header />}

                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path='/movies'
            element={
              <>
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  allMovies={allMovies}
                  isLoad={isLoad}
                  savedMovies={savedMovies}
                  saveUserMovie={saveUserMovie}
                  deleteUserMovie={deleteUserMovie}
                  element={Movies}
                />
              </>
            }
          />

          <Route
            path='/saved-movies'
            element={
              <>
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  deleteUserMovie={deleteUserMovie}
                  searchQuery={searchQuery}
                  isFoundMovie={isFoundMovie}
                  shortMovies={shortMovies}
                  checked={checked}
                  toggleCheckBox={toggleCheckBox}
                  isLoad={isLoad}
                  searchSaved={searchSaved}
                  changeSaved={changeSaved}
                />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <ProtectedRouteElement
                  element={Profile}
                  onUpdateUser={updateProfile}
                  signOut={signOut}
                  loggedIn={loggedIn}
                  isLoad={isLoad}
                />
              </>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
