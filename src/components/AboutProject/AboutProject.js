import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <article className='about-project__item'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className='about-project__item'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <article className='about-project__weeks'>
        <div className='about-project__week1'>1 неделя</div>
        <div className='about-project__week4'>4 недели</div>
      </article>
      <article className='about-project__tasks'>
        <p className='about-project__back'>Back-end</p>
        <p className='about-project__front'>Front-end</p>
      </article>
    </section>
  );
}
export default AboutProject;
