import './Footer.css';
function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <nav className='footer__nav'>
        <p className='footer__copy'>&copy; 2023</p>
        <ul className='footer__nav-list'>
          <li>
            <a
              className='footer__nav-link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__nav-link'
              href='https://github.com/jones876'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
