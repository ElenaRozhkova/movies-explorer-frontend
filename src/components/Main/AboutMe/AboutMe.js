import './AboutMe.css';
import photo from '../../../images/myphoto.jpg';

function AboutMe() {
  return (
    <>
        <section className="aboutme" id ="aboutme">
            <h2 className="aboutme__header">Web Developer</h2>
            <div className="aboutme__content">
                <div className="aboutme__info">
                    <div>
                        <h3 className="aboutme__title">Elena</h3>
                        <div className="aboutme__subtitle">Frontend developer, 33 yo</div> 
                        <p className="aboutme__text">I was born in Sergiev Posad, Russia. I have a diplom degree in Computer Science. 
                        I really like travelling. In my free time I work out and read books. </p>  
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