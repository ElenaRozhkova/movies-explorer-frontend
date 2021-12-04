import './App.css';
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import SavedMovies from '../SavedMovies/SavedMovies'
import React, {useEffect, useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import moviesApi from '../../utils/MoviesApi';
import authApi from '../../utils/MainApi';
import { createApiUser } from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";



function App() {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cards, setCards] = useState([]);
  const [saveCards, setSaveCards] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [notMovies, setNotMovies] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [api, setApi] = React.useState({});
  const [savedCardsId, setSavedCardsId] = React.useState([]);
  
 
  const updateProfile = (token) => {
    const moviesApi = createApiUser(token);
    setApi(moviesApi);
    Promise.all([moviesApi.getUser(), moviesApi.getMovies()])
        .then(([user, savemovies]) => {
            setCurrentUser(user);
            setSaveCards(savemovies);
            const savemovieId = savemovies.map((movie) => movie.movieId);
            setSavedCardsId(savemovieId);
        })
        .catch((err) => {
            console.log(err);
        });
};

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
    const handleCardLike=(movie)=>{
      api.createMovie(movie)
       .then((saveMovie)=>{
         setSaveCards([...saveCards, {...saveMovie}]);
         setSavedCardsId([...savedCardsId, saveMovie.movieId]);
       })
       .catch((err) => {
        console.log(err);
         });
    }

    const handleCardDelete=(movie)=>{
      let movieDelete={};
      if (!movie._id) {
      const movienew = saveCards.filter(v => v.movieId===movie.movieId);
            movieDelete=movienew[0];
      }
      else movieDelete=movie;
      api.deleteMovie(movieDelete._id)
       .then((deleteMovie)=>{
          // Формируем новый массив на основе имеющегося, удаляя из него карточку card._id
          const newSaveMovies = saveCards.filter(function (c) {
            return c._id !== deleteMovie._id;
           });
          const filteredMoviesIds = savedCardsId.filter(function (id) {
            return id !== deleteMovie.movieId;
          });
        // Обновляем стейт
        setSaveCards(newSaveMovies);
        setSavedCardsId(filteredMoviesIds);
        //setCards(newMovies);
       })
       .catch((err) => {
        console.log(err);
         });
    }

    const handleLoginClick=(value)=> {
      setIsInfoTooltipOpen(value);
  }
    const onRegister = (email, password, name) => {
      authApi.register(email, password, name)
          .then((res) => {
              if (res) {
                setText("Вы успешно зарегистрировались!");
                handleLoginClick(true);
              }
          })
          .catch((err) => {
                setText("Что-то пошло не так! Попробуйте ещё раз.");
                handleLoginClick(true);
          })
  }

  const onLogin = (email, password) => {
    authApi.login(email, password)
      .then((data) => {
          if (data.token) {
              localStorage.setItem('jwt', data.token);
              email = '';
              password = '';
              handleLogin(); // обновляем стейт внутри App.js
              tokenCheck();
              history.push('/movies'); // и переадресуем пользователя! 
          }
      })
    .catch(err => {console.log(err)});
}

  const tokenCheck =() =>{
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        // проверим токен
        authApi.getContent(jwt)
        .then((res) => {
            if (res) {
                // авторизуем пользователя
                setLoggedIn(true);
                updateProfile(jwt);
                history.push("/movies");
            }
        })            
        .catch((err) => {
            console.log(err);
        })
    }
  }

  React.useEffect(() => {
    tokenCheck()
}, []);

  const closePopupNew=()=> {
    setIsInfoTooltipOpen(false);
    history.push('/signin');
}

const handleLogin=()=> {
  setLoggedIn(true);
}
  return (
    <div className="App">
        <CurrentUserContext.Provider value={currentUser} >
        <div className="root">
          <Switch>
            <Route path="/movies" > 
              <Movies cards={cards}
                      isSubmitting={isSubmitting}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSubmit={handleSubmit} 
                      notMovies={notMovies}
                      onCardLike={handleCardLike}
                      savedCardsId={savedCardsId} 
                      onCardDelete={handleCardDelete}/> 
              <Footer />       
            </Route>

            <Route path="/saved-movies" > 
              <SavedMovies cards={saveCards}
                      isSubmitting={isSubmitting}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSubmit={handleSubmit} 
                      notMovies={notMovies}
                      onCardDelete={handleCardDelete}
                      savedCardsId={savedCardsId} /> 
              <Footer />       
            </Route>

            <Route path="/profile" > 
              <Profile />        
            </Route>

            <Route path="/signup" > 
              <Register onRegister={onRegister} />        
            </Route>

            <Route path="/signin" > 
              <Login onLogin={onLogin}/>        
            </Route>
          
            <Route path="/" exact>
              <Main />
              <Footer />
            </Route>

            <Route path="*">
                <NotFound />
              </Route>

            </Switch>
            <InfoTooltip isOpen={isInfoTooltipOpen}
                            onClose={closePopupNew}
                            text={text}
                        />
        </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
