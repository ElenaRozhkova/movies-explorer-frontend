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
    const updateDaten = { name: currentUser.name, email: currentUser.email };

    const changeUser = isValid && (values.name!==currentUser.name && values.email!==currentUser.email);
    const setOnForm=(value)=>{
        setOpenForm(value);
        }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(values.name) updateDaten.name=values.name;
        if(values.email) updateDaten.email=values.email;
        updateProfileDaten({name : updateDaten.name, email: updateDaten.email});
        resetForm();
    } 
       
   return (
    <div className={`profile ${openForm ? "profile_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm }/>               
        <div className="myprofile">
            <div className="myprofile__title">Hello, {currentUser.name}!</div>

            <form className="myprofile__container" onSubmit={onSubmit}>
                <div className="myprofile__elements">
                    <div className="myprofile__element">Name</div>
                    <input type="text" className="myprofile__element" name="name" value={values.name || currentUser.name} 
                    onChange={handleChange} placeholder="Elena" required
                    minLength={2} maxLength={30}
                    pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$"
                    />
                </div>
                <div className="profile__error">{errors.name}</div> 

                <div className="myprofile__elements">
                    <div className="myprofile__element">E-mail</div>
                    <input type="email" className="myprofile__element" value={values.email || currentUser.email} required
                     onChange={handleChange} placeholder="example@gmx.de"
                     pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$" 
                     minLength={6} name="email"
                     />
                </div>
                <div className="profile__error">{errors.email}</div> 
                <button className={`myprofile__update ${!changeUser ? "myprofile__link-disabled" : "myprofile__link-notdisabled"}`} disabled={!isValid}>Edit</button>
            </form>
        <Link to="/" style={{ textDecoration: 'none' }}><div className="myprofile__out" onClick={onSignOut}>Logout</div></Link>
        </div>
    </div>
  );
}

export default Profile;