import React from "react";
import './Login.css';
import './../Register/Register.css';
import logo from './../../images/logo__COLOR_main-1.svg';
import { Link } from 'react-router-dom';

function Login() {
    const [validEmail, setValidEmail] =React.useState(false);
    const [validPassword, setValidpassword] =React.useState(false);
    const [email, setEmail] =React.useState('');
    const [password, setPassword] =React.useState('');


    const changeEmail=(e) => {
        setEmail(e.target.value);
        if (email.length<=2) {setValidEmail(true)} else {setValidEmail(false)}
        };    
        
    const changePassword=(e) => {
        setPassword(e.target.value);
        if (password.length<8) {setValidpassword(true)} else {setValidpassword(false)}
        };  

  return (
    <div className="login">
        <div className="login__container">
            <Link to="/"><img className="login__logo" src={logo} alt="logo" /></Link>
            <p className="login__title">Рады видеть!</p>
            <form className="login__form">
                <div className="login__conteiner">
                    <label className="login__subtitle"> E-mail </label>
                    <input className={`login__input ${email.length<2 ? "login__input_type_error":""}`} type="email" value={email || ""} onChange={changeEmail} required id="Email" name="Email" placeholder="pochta@yandex.ru" />
                    {validEmail ?  <div className="login__error">Что-то пошло не так...</div> :""}
                    
                    <label className="login__subtitle"> Пароль </label>
                    <input className={`login__input ${password.length<8 ? "login__input_type_error":""}`} value={password || ""} onChange={changePassword} type="password" required id="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                    {validPassword ?  <div className="login__error login__last-error">Что-то пошло не так...</div> :""}
                </div>
            
                <div className="login__button">
                   <Link to="/movies" style={{ textDecoration: 'none' }}><button type="submit" className="login__link">Войти</button></Link>
                </div>
                <div className="login__submit">Ещё не зарегистрированы?  <Link to="/signup" style={{ textDecoration: 'none' }}><div className="login__submit_type_blau">Регистрация</div></Link></div>
            </form>
        </div>
    </div>
  );
}

export default Login;