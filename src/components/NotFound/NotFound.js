import './NotFound.css';

function NotFound() {

  return (
    <div className="notfound">
        <h2 className="notfound__error">404</h2>
        <div className="notfound__text">Страница не найдена</div>
        <div className="notfound__title">Назад</div>
    </div>
  );
}

export default NotFound;