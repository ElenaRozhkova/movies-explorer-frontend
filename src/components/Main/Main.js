import './Main.css';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from './../Header/Header';
import logo from '../../images/logo__COLOR_main-1.svg';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="root">
     <Header>
            <img src={logo} alt="" className="mainlogo" />
            <nav className="menu__header">
                <Link to="/signup" className="menu__item">Регистрация</Link>
                <button className="menu__button">
                    <Link to="/signin" style={{ textDecoration: 'none' }} className="menu__item menu__item_dark">Войти</Link>
                </button>
            </nav>
     </Header>
     <Promo />
     <NavTab />
     <AboutProject />
     <Techs />
     <AboutMe />
     <Portfolio />
    </div>
  );
}

export default Main;