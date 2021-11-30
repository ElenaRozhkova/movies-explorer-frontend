import './Portfolio.css';
import pfeil from '../../../images/pfeil.svg';

function Portfolio() {
  return (
    <>
        <section className="portfolio">
            <div className="portfolio__header">Портфолио</div>
            <ul className="portfolio__projects">
              <a href="https://elenarozhkova.github.io/how-to-learn/" className="portfolio__project">                          
                    <div className="portfolio__title">Статичный сайт</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />                
              </a>
              <a href="https://elenarozhkova.github.io/russian-travel/" className="portfolio__project">
                    <div className="portfolio__title">Адаптивный сайт</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />
              </a>
              <a href="http://elenarozhkova.nomoredomains.monster/sign-in" className="portfolio__project">
                    <div className="portfolio__title">Одностраничное приложение</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />
              </a>
            </ul>
        </section>
    </>
  );
}

export default Portfolio;