import './AboutProject.css';

function AboutProject() {
  return (
    <>
        <section className="project" id="aboutproject">
            <h1 className="project__title">О проекте</h1>
            <div className="project__about">
                <div className="project__about-info">
                    <h2 className="project__about-title">Дипломный проект включал 5 этапов</h2>
                    <h3 className="project__about-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
                </div>
                <div className="project__about-info">
                    <h2 className="project__about-title">На выполнение диплома ушло 5 недель</h2>
                    <h3 className="project__about-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
                </div>
            </div>
            <div className="project__time">
                <div className="project__time-back">
                    <div className="project__time-back_green">1 неделя</div>
                    <div className="project__time_title">Back-end</div>
                </div>
                <div className="project__time-front">
                    <div className="project__time-front_grey">4 недели</div>
                    <div className="project__time_title">Front-end</div>
                </div>
            </div>
        </section>
    </>
  );
}

export default AboutProject;
