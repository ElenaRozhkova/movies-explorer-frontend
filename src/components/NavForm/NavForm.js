import React from "react";
import './NavForm.css';
import { Link } from 'react-router-dom';
import close from '../../images/close.svg';

function NavForm({ form, closeForm }) {
 
  return (
        <section class="form" className={`form ${form ? "form__open" : ""}`}>
            <div class="form__toggle">
                <img className="close-image" src={close} alt="close" onClick={closeForm}/>
                <nav className="form__menu">
                    <div className="form__items">
                        <Link to="/" style={{ textDecoration: 'none' }}><div className="form__item">Главная</div></Link>
                        <Link to="/movies" style={{ textDecoration: 'none' }}><div className="form__item">Фильмы</div></Link>
                        <Link to="/saved-movies" style={{ textDecoration: 'none' }}><div className="form__item">Сохранённые фильмы</div></Link>
                    </div>
                    <Link to="/profile" style={{ textDecoration: 'none' }}><button className="menu__button-movies menu__button-movies_type_mobile">
                        <div className="menu__item menu__item_dark menu__item_account_size">Аккаунт</div>
                        <button className="menu__item-account_round" />
                        </button>
                    </Link>
                </nav>
            </div>   
        </section>      

  );
}

export default NavForm;