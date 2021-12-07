import './Footer.css';

function Footer() {
  return (
        <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__links">
            <p className="footer__copyright"> &copy; {new Date().getFullYear()}</p>
                <nav className="menu menu_type_mobile">
                    <a href="https://practicum.yandex.ru/" className="footer__link" target="_self">Яндекс.Практикум</a>
                    <a href="https://github.com/ElenaRozhkova" className="footer__link" target="_self">Github</a>
                    <a href="https://www.facebook.com/elena.kuzmina.397" className="footer__link" target="_self">Facebook</a>
                </nav>
            </div>
        </footer>
  );
}

export default Footer;