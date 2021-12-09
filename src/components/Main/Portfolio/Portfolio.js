import './Portfolio.css';
import pfeil from '../../../images/pfeil.svg';

function Portfolio() {
  return (
    <>
        <section className="portfolio">
            <div className="portfolio__header">Portfolio</div>
            <ul className="portfolio__projects">
              <a href="https://elenarozhkova.github.io/first-project/index.html" className="portfolio__project">                          
                    <div className="portfolio__title">Static web-page</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />                
              </a>
              <a href="https://elenarozhkova.github.io/travel-de-ru/" className="portfolio__project">
                    <div className="portfolio__title">Adaptive web-page</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />
              </a>
              <a href="https://elenarozhkova.github.io/mestode/" className="portfolio__project">
                    <div className="portfolio__title">Single-page application</div>
                    <img src={pfeil} alt ="pfeil" className="portfolio__link" />
              </a>
            </ul>
        </section>
    </>
  );
}

export default Portfolio;