import './AboutMe.css';
import avatar from '../../images/avatar.png';
function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__wrapper'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Евгений</h3>
          <p className='about-me__prof'>Начинающий веб-разработчик, 42 года</p>
          <p className='about-me__desc'>
            Я родился и живу в Калуге. Закончил медучилище, но всю жизнь работал
            на производстве гофрокартонаи и гофротары. В связи с инвалидностью
            задумался о смене деятельности. На больничном начал самостоятельно
            изучать веб-разработку и вроде стало получаться. Люблю русский рок,
            кошек и фантастику.
          </p>
          <a
            className='about-me__link'
            target='_blank'
            href='https://github.com/jones876'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__image' src={avatar} alt='Фотография студента'></img>
      </div>
    </section>
  );
}
export default AboutMe;
