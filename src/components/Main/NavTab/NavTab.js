import './NavTab.css';

function NavTab() {
  return (
    <>
    <ul className="navigator">
        <li className="navigator__item"> <a href="#aboutproject" className="navigator_color_white">About</a></li>
        <li className="navigator__item"> <a href="#technologie" className="navigator_color_white">Technologies</a></li>
        <li className="navigator__item"> <a href="#aboutme" className="navigator_color_white">Student</a></li>       
    </ul>
    </>
  );
}

export default NavTab;
