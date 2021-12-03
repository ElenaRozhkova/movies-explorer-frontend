import React from 'react';
import './InfoTooltip.css';

function InfoTooltip ({ isOpen, onClose, text, logo}) {

  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
    <div className={`popup__container`}>
    <div className="popup__form" >
          <fieldset className="popup__form-set">
            <button type="button" onClick={onClose} className="popup__close">
              <div className="popup__close-icon"></div>
            </button>
            <div className="popup__form-registered">
            <div className="popup__registered">{text}</div> 
            </div>          
          </fieldset>
    </div>
      
    </div>
  </div>

  
  );
}

export default InfoTooltip;