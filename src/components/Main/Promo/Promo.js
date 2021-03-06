import './Promo.css';
import logo from '../../../images/pic__COLOR_landing-logo.png';

function Promo() {
  return (
    <>
        <section className="promo root__cover">
            <img src={logo} alt="logo" className="promo__image promo__image_type_logo" />
            <p className="promo__text promo__text_pos_center">Учебный проект студента факультета Веб-разработки.</p>
        </section>
    </>
  );
}

export default Promo;