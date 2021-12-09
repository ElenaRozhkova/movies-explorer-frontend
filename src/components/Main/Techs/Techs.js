import './Techs.css';

function Techs() {
  return (
    <>
    <section className="techs" id="technologie">
        <h3 className="techs__header">Technologies</h3>
        <h2 className="techs__title">7 technologies</h2>
        <p className="techs__subtitle">During this frontend engineering course we learned the following technologies applied in the final project.</p>
       
        <ul className="techs__items">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
        </ul>
    </section>
</>
  );
}

export default Techs;