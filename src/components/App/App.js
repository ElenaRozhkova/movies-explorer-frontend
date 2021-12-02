import './App.css';
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import moviesApi from '../../utils/MoviesApi';


function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cards, setCards] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [notMovies, setNotMovies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  }

  const createCards =(movies)=>{
    setCards(movies.map(item => ({
      country: item.country,
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `https://api.nomoreparties.co${item.image.url}`,
      trailer: item.trailerLink,              
      thumbnail: item.image.formats.thumbnail,
      movieId:  item.id,
      nameRU: item.nameRU,              
      nameEN: item.nameEN,
    })))
  }
  useEffect(() => {
    if (localStorage.getItem('movies')) {
    const movies=JSON.parse(localStorage.getItem('movies'));
    createCards(movies);
  }
  }, [])

  useEffect(() => {
    if (isSubmitting) {
      moviesApi.search()
          .then(data => {
            setNotMovies('');
            const movies = data.filter(v => v.nameRU.includes(searchQuery) && searchQuery!=="");
            if (movies.length === 0) {setNotMovies('Ничего не найдено');} 
            else{
              localStorage.setItem('movies', JSON.stringify(movies));
            }
            setIsSubmitting(false);
            createCards(movies);
          })
          .catch((err)=>{
            console.log(err);
            setIsSubmitting(false)
            setNotMovies(`Во время запроса произошла ошибка. Возможно, 
            проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз.`);
          })
    }

  }, [isSubmitting, searchQuery])

  return (
    <div className="App">
        <div className="root">
          <Switch>
            <Route path="/movies" > 
              <Movies cards={cards}
                      isSubmitting={isSubmitting}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSubmit={handleSubmit} 
                      notMovies={notMovies} /> 
              <Footer />       
            </Route>

            <Route path="/saved-movies" > 
              <SavedMovies cards={cards}
                      isSubmitting={isSubmitting}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSubmit={handleSubmit} 
                      notMovies={notMovies} /> 
              <Footer />       
            </Route>

            <Route path="/profile" > 
              <Profile />        
            </Route>

            <Route path="/signup" > 
              <Register />        
            </Route>

            <Route path="/signin" > 
              <Login />        
            </Route>
          
            <Route path="/" exact>
              <Main />
              <Footer />
            </Route>

            <Route path="*">
                <NotFound />
              </Route>

            </Switch>
        </div>
    </div>
  );
}

export default App;
