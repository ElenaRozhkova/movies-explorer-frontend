import React from "react";
import './Register.css';
import logo from './../../images/logo__COLOR_main-1.svg';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import {useFormWithValidation} from '../validation/useFormWithValidation';

function Register({onRegister}) {

    const {values, handleChange, errors, isValid, resetForm}=useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.email, values.password, values.name);
        resetForm();
    } 
  return (
    <div className="register">
        <div className="register__container">
            <Link to="/"><img className="register__logo" src={logo} alt="logo" /></Link>
            <p className="register__title">Welcome!</p>
            <Form  
                onSubmit={handleSubmit} 
                buttonText={"Register"}
                labelQuestion={"Already have an account?"}
                labelText={"Login"}
                isValid={isValid}
                path={"signin"}
                >
                <div className="register__conteiner">
                    <label className="register__subtitle"> Имя </label>
                    <input className={`register__input ${errors.name ? "register__input_type_error":""}`}  value={values.name || ""} 
                            onChange={handleChange}  
                            type="text" required id="Name" name="name" placeholder="Your Name" 
                            minLength={2} maxLength={30}
                            pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$"/>
                    <div className="register__error">{errors.name}</div> 

                    <label className="register__subtitle"> E-mail </label>
                    <input className={`register__input ${errors.email ? "register__input_type_error":""}`} 
                            type="email" value={values.email || ""} onChange={handleChange}
                            required id="Email" name="email" placeholder="Your Email" pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"/>
                    <div className="register__error">{errors.email}</div> 

                    <label className="register__subtitle"> Пароль </label>
                    <input className={`register__input ${errors.password ? "register__input_type_error":""}`} value={values.password || ""} 
                            onChange={handleChange} 
                            type="password" required id="password" name="password" 
                            minLength={6}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                    <div className="register__error register__last-error">{errors.password}</div>
                </div>           
            </Form>
        </div>
    </div>
  );
}

export default Register;