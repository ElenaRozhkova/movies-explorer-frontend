import './AboutProject.css';

function AboutProject() {
  return (
    <>
        <section className="project" id="aboutproject">
            <h1 className="project__title">About</h1>
            <div className="project__about">
                <div className="project__about-info">
                    <h2 className="project__about-title">Final project included 5 milestones</h2>
                    <h3 className="project__about-subtitle">Planning, backend development, UI layout, features implementation, and last touches.</h3>
                </div>
                <div className="project__about-info">
                    <h2 className="project__about-title">Final project took 5 weeks</h2>
                    <h3 className="project__about-subtitle">Each milestone had soft and hard deadlines, which had to be met for successful sign off.</h3>
                </div>
            </div>
            <div className="project__time">
                <div className="project__time-back">
                    <div className="project__time-back_green">1 week</div>
                    <div className="project__time_title">Back-end</div>
                </div>
                <div className="project__time-front">
                    <div className="project__time-front_grey">4 weeks</div>
                    <div className="project__time_title">Front-end</div>
                </div>
            </div>
        </section>
    </>
  );
}

export default AboutProject;
