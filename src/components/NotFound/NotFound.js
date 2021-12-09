import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className="notfound">
        <h2 className="notfound__error">404</h2>
        <div className="notfound__text">Not Found</div>
        <Link to="/" style={{ textDecoration: 'none' }}><div className="notfound__title">Go Back</div></Link>
    </div>
  );
}

export default NotFound;