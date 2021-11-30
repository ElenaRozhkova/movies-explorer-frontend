import React from "react";
import './Register.css';
import logo from './../../images/logo__COLOR_main-1.svg';
import { Link } from 'react-router-dom';

function Register() {
    const [validname, setValidname] =React.useState(false);
    const [validEmail, setValidEmail] =React.useState(false);
    const [validPassword, setValidpassword] =React.useState(false);
    const [name, setName] =React.useState('');
    const [email, setEmail] =React.useState('');
    const [password, setPassword] =React.useState('');


    const changeName=(e) => {
        setName(e.target.value);
        if (name.length<=2) {setValidname(true)} else {setValidname(false)}
        };

    const changeEmail=(e) => {
        setEmail(e.target.value);
        if (email.length<2) {setValidEmail(true)} else {setValidEmail(false)}
        };    
        
    const changePassword=(e) => {
        setPassword(e.target.value);
        if (password.length<8) {setValidpassword(true)} else {setValidpassword(false)}
        };     

  return (
    <div className="register">
        <div className="register__container">
            <Link to="/"><img className="register__logo" src={logo} alt="logo" /></Link>
            <p className="register__title">Добро пожаловать!</p>
            <form className="register__form">
                <div className="register__conteiner">
                    <label className="register__subtitle"> Имя </label>
                    <input className={`register__input ${name.length<2 ? "register__input_type_error":""}`} value={name || ""} onChange={changeName} type="text" required id="Name" name="Name" placeholder="Виталий" />
                    {validname ?  <div className="register__error">Что-то пошло не так...</div> :""}

                    <label className="register__subtitle"> E-mail </label>
                    <input className={`register__input ${email.length<2 ? "register__input_type_error":""}`} type="email" value={email || ""} onChange={changeEmail} required id="Email" name="Email" placeholder="pochta@yandex.ru" />
                    {validEmail ?  <div className="register__error">Что-то пошло не так...</div> :""}

                    <label className="register__subtitle"> Пароль </label>
                    <input className={`register__input ${password.length<8 ? "register__input_type_error":""}`} value={password || ""} onChange={changePassword} type="password" required id="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                    {validPassword ?  <div className="register__error register__last-error">Что-то пошло не так...</div> :""}
                </div>
            
                <div className="register__button-container">
                <Link to="/" style={{ textDecoration: 'none' }}><button type="submit" className="register__link" >Зарегистрироваться</button></Link>
                </div>
                <div className="register__submit">Уже зарегистрированы? <Link to="/signin" style={{ textDecoration: 'none' }}><div className="register__submit_type_blau">Войти</div></Link></div>
            </form>
        </div>
    </div>
  );
}

export default Register;