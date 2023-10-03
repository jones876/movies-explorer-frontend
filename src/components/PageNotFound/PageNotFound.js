import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className='pnf'>
      <div className='pnf__container'>
        <h1 className='pnf__title'>404</h1>
        <p className='pnf__text'>Страница не найдена</p>
      </div>
      <Link to='/' className='pnf__link'>
        Назад
      </Link>
    </main>
  );
}
export default PageNotFound;
