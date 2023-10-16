import './PageNotFound.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <main className='pnf'>
      <div className='pnf__container'>
        <h1 className='pnf__title'>404</h1>
        <p className='pnf__text'>Страница не найдена</p>
      </div>
      <Link to='/' className='pnf__link' onClick={handleGoBack}>
        Назад
      </Link>
    </main>
  );
};
export default PageNotFound;
