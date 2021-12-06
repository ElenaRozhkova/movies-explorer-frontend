import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Profile.css';
import {useFormWithValidation} from '../validation/useFormWithValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignOut, updateProfileDaten }) {
    const {values, handleChange, errors, isValid, resetForm}=useFormWithValidation();
    const [openForm, setOpenForm] = useState(false);
    const currentUser = React.useContext(CurrentUserContext);
    const setOnForm=(value)=>{
        setOpenForm(value);
        }

    const onSubmit=(e)=>{
        e.preventDefault();
        updateProfileDaten({name : values.name, email: values.email});
    }    
   return (
    <div className={`profile ${openForm ? "profile_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm }/>               
        <div className="myprofile">
            <div className="myprofile__title">Привет, {currentUser.name}!</div>

            <form className="myprofile__container" onSubmit={onSubmit}>
                <div className="myprofile__elements">
                    <div className="myprofile__element">Имя</div>
                    <input type="text" className="myprofile__element" name="name" value={values.name || currentUser.name} 
                    onChange={handleChange} placeholder="Виталий" required
                    minLength={2} maxLength={30}
                    pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$"
                    />
                </div>
                <div className="profile__error">{errors.name}</div> 

                <div className="myprofile__elements">
                    <div className="myprofile__element">E-mail</div>
                    <input type="email" className="myprofile__element" value={values.email || currentUser.email} required
                     onChange={handleChange} placeholder="pochta@yandex.ru" 
                     minLength={6} name="email"
                     />
                </div>
                <div className="profile__error">{errors.email}</div> 
                <button className={`myprofile__update ${!isValid ? "myprofile__link-disabled" : "myprofile__link-notdisabled"}`} disabled={!isValid}>Редактировать</button>
            </form>
        <Link to="/" style={{ textDecoration: 'none' }}><div className="myprofile__out" onClick={onSignOut}>Выйти из аккаунта</div></Link>
        </div>
    </div>
  );
}

export default Profile;