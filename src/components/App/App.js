import '../App/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className='page'>
      <Popup />
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route
          path='/'
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <HeaderNav />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <HeaderNav />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <HeaderNav />
              <Profile />
            </>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
