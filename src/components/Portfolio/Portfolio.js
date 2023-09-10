import './Portfolio.css';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li>
          <a
            className='portfolio__link'
            target='_blank'
            href='https://jones876.github.io/how-to-learn/'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Статичный сайт</p>
            <p className='portfolio__arr'>↗</p>
          </a>
        </li>
        <div className='portfolio__line'></div>
        <li>
          <a
            className='portfolio__link'
            target='_blank'
            href='https://jones876.github.io/russian-travel/'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <p className='portfolio__arr'>↗</p>
          </a>
        </li>
        <div className='portfolio__line'></div>
        <li>
          <a
            className='portfolio__link'
            target='_blank'
            href='https://jeka.nomoreparties.co/sign-in'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <p className='portfolio__arr'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
