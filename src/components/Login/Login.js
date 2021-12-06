import React from "react";
import './Login.css';
import logo from './../../images/logo__COLOR_main-1.svg';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import {useFormWithValidation} from '../validation/useFormWithValidation';

function Login({onLogin}) {

    const {values, handleChange, errors, isValid, resetForm}=useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password);
        resetForm();
    } 
  return (
    <div className="login">
        <div className="login__container">
            <Link to="/"><img className="login__logo" src={logo} alt="logo" /></Link>
            <p className="login__title">Рады видеть!</p>
            <Form  
                onSubmit={handleSubmit} 
                buttonText={"Войти"}
                labelQuestion={"Ещё не зарегистрированы?"}
                labelText={"Регистрация"}
                isValid={isValid}
                path={"signup"}
                >
                <div className="login__conteiner">
                    <label className="login__subtitle"> E-mail </label>
                    <input className={`login__input ${errors.email ? "login__input_type_error":""}`} 
                            type="email" value={values.email || ""} onChange={handleChange}
                            required id="Email" name="email" placeholder="pochta@yandex.ru" pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"/>
                    <div className="register__error">{errors.email}</div> 

                    <label className="login__subtitle"> Пароль </label>
                    <input className={`login__input ${errors.password ? "login__input_type_error":""}`} value={values.password || ""} onChange={handleChange} 
                            type="password" required id="password" name="password" 
                            minLength={6}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                    <div className="login__error login__last-error">{errors.password}</div>
                </div>           
            </Form>
        </div>
    </div>
  );
}

export default Login;