import './Promo.css';
function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav>
          <ul className='promo__nav'>
            <li className='promo__link-btn'>
              <a href='#about-project' className='promo__link'>
                О проекте
              </a>
            </li>
            <li className='promo__link-btn'>
              <a href='#techs' className='promo__link'>
                Технологии
              </a>
            </li>
            <li className='promo__link-btn'>
              <a href='#about-me' className='promo__link'>
                Студент
              </a>
            </li>
          </ul>

        </nav>

      </div>
    </section>
  );
}
export default Promo;
