import React from "react";
import './Form.css';
import { Link } from 'react-router-dom';

//хук управления формой
export function Form({children, onSubmit, buttonText, labelQuestion, labelText, isValid, path}) {

  return (
      <form className="container__form" onSubmit={onSubmit}>
        {children}  
        <div className={`button-container ${!isValid ? "button__link-disabled" : "button__link-notdisabled"}`}>
            <button type="submit" className={`button__link ${!isValid ? "button__link-disabled" : "button__link-notdisabled"}`} disabled={!isValid}>{buttonText}
            </button>
        </div>
        <div className="label-text">{labelQuestion} <Link to={`/${path}`} style={{ textDecoration: 'none' }}> <div className="label-text_type_blau">{labelText}</div></Link></div>
      </form>
  )
}


export default Form;

