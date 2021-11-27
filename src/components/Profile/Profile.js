import React from "react";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Profile.css';

function Profile() {
    const [name, setName] =React.useState("Виталий");
    const [email, setEmail] =React.useState("pochta@yandex.ru");
    const [validName, setValidName] =React.useState(false);
    const [validEmail, setValidEmail] =React.useState(false);

    const changeName=(e) => {
        setName(e.target.value);
        if (name.length<=2) {setValidName(true)} else {setValidName(false)}
        };

    const changeEmail=(e) => {
        setEmail(e.target.value);
        if (email.length<2) {setValidEmail(true)} else {setValidEmail(false)}
        }; 

  return (
    <div className="profile">
        <Header>
            <Navigation />               
        </Header>
        <div className="myprofile">
            <div className="myprofile__title">Привет, {name}!</div>
            <div className="myprofile__container">
                <div className="myprofile__elements">
                    <div className="myprofile__element">Имя</div>
                    <input type="text" className="myprofile__element" value={name || ""} onChange={changeName} placeholder={name} />
                </div>
                {validName ?  <div className="profile__error">Что-то пошло не так...</div> :""}
                <div className="myprofile__elements">
                    <div className="myprofile__element">E-mail</div>
                    <input type="text" className="myprofile__element" value={email || ""} onChange={changeEmail} placeholder={email} />
                </div>
                {validEmail ?  <div className="profile__error">Что-то пошло не так...</div> :""}
            </div>
        <div className="myprofile__update">Редактировать</div>
        <Link to="/" style={{ textDecoration: 'none' }}><div className="myprofile__out">Выйти из аккаунта</div></Link>
        </div>
    </div>
  );
}

export default Profile;