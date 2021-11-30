import './AboutMe.css';
import photo from '../../../images/myphoto.jpg';

function AboutMe() {
  return (
    <>
        <section className="aboutme" id ="aboutme">
            <h2 className="aboutme__header">Студент</h2>
            <div className="aboutme__content">
                <div className="aboutme__info">
                    <div>
                        <h3 className="aboutme__title">Елена</h3>
                        <div className="aboutme__subtitle">Фронтенд-разработчик, 33 года</div> 
                        <p className="aboutme__text">Я родом из Сергиево-Посада, закончила там факультет прикладной математики и информатики. 
                        Потом работала аналитиком несколько лет и ушла в декрет. У меня замечательная дочка, которой 5 лет:) 
                        Чтобы вспомнить старое и приобрести новые навыки в сфере Веб заканчиваю курсы на Веб разработчика в Яндекс-Практикум. </p>  
                     </div> 
                     <div className="aboutme__links">
                        <a href ="https://www.facebook.com/elena.kuzmina.397" className="aboutme__link">Facebook </a>
                        <a href ="https://github.com/ElenaRozhkova" className="aboutme__link">Github </a>  
                    </div> 
                </div> 
                <img className="aboutme__photo" src={photo} alt="myphoto"/>
            </div>
        </section>
    </>
  );
}

export default AboutMe;