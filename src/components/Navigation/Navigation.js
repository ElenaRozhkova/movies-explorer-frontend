import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo__COLOR_main-1.svg';
import logoTablet from '../../images/logo__COLOR_main-1.svg';
import menu from '../../images/menu.svg';
import close from '../../images/close.svg';

function Navigation() {
  const [form, setForm] = React.useState(false);

  const onOpen =()=>{
    setForm(!form);
  }

  const closeForm=()=>{
    setForm(false);
  }

  return (
          <>
            <Link to="/" className="logo_type_desktop"><img src={logo} alt="logoDesktop" className="logo" /></Link>
            <Link to="/" className="logo_type_tablet"><img src={logoTablet} alt="logoTablet" className="logo " /></Link>
                  <nav className="menu__header menu__header_size menu__header_type_desktop">
                  <Link to="/movies" style={{ textDecoration: 'none' }}><div className="menu__item-movies ">Фильмы</div></Link>
                  <Link to="/saved-movies" style={{ textDecoration: 'none' }}><div className="menu__item-movies  menu__item_style_size">Сохранённые фильмы</div></Link>
                      <button className="menu__button-movies">
                          <Link to="/profile" className="menu__item-movies menu__item_account_size">Аккаунт</Link>
                          <button className="menu__item-account_round" />
                      </button>
                  </nav>
                  <div className="menu__header_type_tablet" onClick={onOpen}>
                    <img className="menu__image" src ={menu} alt="menu" /> 
                  </div> 

                  <section class="form" className={`form ${form ? "form__open" : ""}`}>
                        <div class="form__toggle">
                        <img className="close-image" src={close} alt="close" onClick={closeForm}/>
                            <nav className="form__menu">
                                <div className="form__items">
                                <Link to="/" style={{ textDecoration: 'none' }}><div className="form__item">Главная</div></Link>
                                <Link to="/movies" style={{ textDecoration: 'none' }}><div className="form__item">Фильмы</div></Link>
                                <Link to="/saved-movies" style={{ textDecoration: 'none' }}><div className="form__item">Сохранённые фильмы</div></Link>
                                </div>
                                <button className="menu__button-movies menu__button-movies_type_mobile">
                                    <div className="menu__item menu__item_dark menu__item_account_size">Аккаунт</div>
                                    <button className="menu__item-account_round" />
                                </button>
                            </nav>
                        </div>   
                    </section>      
            </>
  );
}

export default Navigation;